"use server"

import { getClient } from "@/libs/apollo-client"
import { ArticleSlugsDocument, ArticlesDocument } from "@/models/graphql"

export async function getArticles(page: number, pageSize: number) {
  return await getClient().query({
    query: ArticlesDocument,
    variables: { page, pageSize },
  })
}

export async function getArticleSlugs() {
  return await getClient().query({
    query: ArticleSlugsDocument,
  })
}
