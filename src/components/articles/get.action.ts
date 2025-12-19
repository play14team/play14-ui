"use server"

import { SlugParamsProps } from "@/libs/slug-params"
import { restQuery, normalizeConnection } from "@/libs/strapi-client"
import {
  articleItemPopulate,
  articleDetailsPopulate,
  articleSidebarLatestPopulate,
  articleNavPopulate,
} from "@/libs/strapi-populate"

// Types - will be replaced by OpenAPI generated types when available
interface UploadFile {
  name: string
  url: string
  width?: number
  height?: number
}

interface Tag {
  value: string
}

interface Author {
  name: string
  slug: string
  position?: string
  tagline?: string
  avatar?: UploadFile
}

interface Article {
  documentId: string
  slug: string
  title: string
  category?: string
  summary?: string
  publishedAt?: string
  updatedAt?: string
  cannonical?: string
  content?: string
  tags?: Tag[]
  defaultImage?: UploadFile
  images?: UploadFile[]
  author?: Author
}

/**
 * Get paginated articles list
 * REST equivalent of: articles/grid.graphql
 */
export async function getArticles(
  page: number,
  pageSize: number,
  category?: string,
  tag?: string,
) {
  const filters: Record<string, unknown> = {}
  if (category) {
    filters.category = { $eqi: category }
  }
  if (tag) {
    filters.tags = { value: { $eqi: tag } }
  }

  const response = await restQuery<Article[]>("articles", {
    sort: ["publishedAt:desc"],
    pagination: { page, pageSize: Math.min(pageSize, 100) },
    filters,
    populate: articleItemPopulate,
  })

  // Normalize to match GraphQL _connection structure
  return {
    articles_connection: normalizeConnection(response),
  }
}

/**
 * Get all articles with optional filters
 * Fetches all pages since Strapi limits pageSize to 100
 */
export async function getAllArticles(category?: string, tag?: string) {
  const allArticles: Article[] = []
  let page = 1
  const pageSize = 100

  const filters: Record<string, unknown> = {}
  if (category) {
    filters.category = { $eqi: category }
  }
  if (tag) {
    filters.tags = { value: { $eqi: tag } }
  }

  while (true) {
    const response = await restQuery<Article[]>("articles", {
      sort: ["publishedAt:desc"],
      pagination: { page, pageSize },
      filters,
      populate: articleItemPopulate,
    })

    const articles = response.data || []
    allArticles.push(...articles)

    if (articles.length < pageSize) {
      break
    }
    page++
  }

  return allArticles
}

/**
 * Get single article by slug
 * REST equivalent of: articles/details.graphql
 */
export async function getArticle({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await restQuery<Article[]>("articles", {
    filters: {
      slug: { $eq: slug },
    },
    populate: articleDetailsPopulate,
  })

  return response.data?.[0] || null
}

/**
 * Get all article slugs for static generation
 * REST equivalent of: articles/slugs.graphql
 */
export async function getArticleSlugs() {
  const response = await restQuery<Array<{ slug: string }>>("articles", {
    fields: ["slug"],
    pagination: { page: 1, pageSize: 5000 },
  })

  return {
    articles: response.data || [],
  }
}

/**
 * Get sidebar data (latest articles, categories, tags)
 * REST equivalent of: articles/sidebar.graphql
 * Note: Requires 3 parallel REST calls to replicate GraphQL aliases
 */
export async function getArticleSidebar() {
  const [latestResponse, categoriesResponse, tagsResponse] = await Promise.all([
    // Latest 3 articles with images
    restQuery<Article[]>("articles", {
      sort: ["publishedAt:desc"],
      pagination: { page: 1, pageSize: 3 },
      populate: articleSidebarLatestPopulate,
    }),
    // All articles - just category field
    restQuery<Array<{ category: string }>>("articles", {
      fields: ["category"],
      pagination: { page: 1, pageSize: 5000 },
    }),
    // All articles with tags
    restQuery<Array<{ tags: Tag[] }>>("articles", {
      populate: { tags: { fields: ["value"] } },
      pagination: { page: 1, pageSize: 5000 },
    }),
  ])

  return {
    latest: { nodes: latestResponse.data || [] },
    categories: categoriesResponse.data || [],
    tags: tagsResponse.data || [],
  }
}

/**
 * Get all articles for navigation
 * REST equivalent of: articles/nav.graphql
 * Note: Strapi limits pageSize to 100, so we need to fetch all pages
 */
export async function getArticleNav() {
  const allArticles: Article[] = []
  let page = 1
  const pageSize = 100

  while (true) {
    const response = await restQuery<Article[]>("articles", {
      sort: ["publishedAt:desc"],
      pagination: { page, pageSize },
      populate: articleNavPopulate,
    })

    const articles = response.data || []
    allArticles.push(...articles)

    if (articles.length < pageSize) {
      break
    }
    page++
  }

  return allArticles
}
