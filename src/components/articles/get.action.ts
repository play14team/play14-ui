"use server"

import { query } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Article,
  ArticleDocument,
  ArticleSlugsDocument,
  ArticlesDocument,
} from "@/models/graphql"

export async function getArticles(page: number, pageSize: number) {
  return await query({
    query: ArticlesDocument,
    variables: { page, pageSize },
  })
}

export async function getArticle({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = await query({
    query: ArticleDocument,
    variables: { slug },
  })

  return (response.articles || [])[0] as Article
}

export async function getArticleSlugs() {
  return await query({
    query: ArticleSlugsDocument,
  })
}
