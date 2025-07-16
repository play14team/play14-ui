"use server"

import { query } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Article,
  ArticleDocument,
  ArticleEntityResponseCollection,
  ArticleSlugsDocument,
  ArticlesDocument,
} from "@/models/graphql"

export async function getArticles(page: number, pageSize: number) {
  return (await query({
    query: ArticlesDocument,
    variables: { page, pageSize },
  })) as { articles?: ArticleEntityResponseCollection }
}

export async function getArticle({ params }: SlugParamsProps) {
  const { slug } = await params
  const response = (await query({
    query: ArticleDocument,
    variables: { slug },
  })) as { articles?: ArticleEntityResponseCollection }

  return response.articles?.data[0].attributes as Article
}

export async function getArticleSlugs() {
  return (await query({
    query: ArticleSlugsDocument,
  })) as { articles?: ArticleEntityResponseCollection }
}
