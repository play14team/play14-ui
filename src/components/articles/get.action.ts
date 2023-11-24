"use server"

import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  Article,
  ArticleDocument,
  ArticleSlugsDocument,
  ArticlesDocument,
} from "@/models/graphql"

export async function getArticles(page: number, pageSize: number) {
  return await getClient().query({
    query: ArticlesDocument,
    variables: { page, pageSize },
  })
}

export async function getArticle({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: ArticleDocument,
    variables: { slug },
  })

  return data?.articles?.data[0].attributes as Article
}

export async function getArticleSlugs() {
  return await getClient().query({
    query: ArticleSlugsDocument,
  })
}
