import ArticleDetails from "@/components/articles/details"
import { getArticle, getArticleSlugs } from "@/components/articles/get.action"
import Page from "@/components/layout/page"
import { dataAsArrayOf } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import {
  ArticleEntity,
  ArticleEntityResponseCollection,
} from "@/models/graphql"

export const revalidate = 3600

export async function generateStaticParams() {
  const response = (await getArticleSlugs()) as {
    articles?: ArticleEntityResponseCollection
  }
  const articles = dataAsArrayOf<ArticleEntity>(
    response.articles || { data: [] },
  )

  return articles.map((article) => ({
    slug: article.attributes?.slug,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const article = await getArticle(props)
  const images = article.images?.data.map((i) => i.attributes?.url) as string[]

  return {
    title: `Articles | ${article.title}`,
    description: article.content?.substring(0, 200),
    openGraph: {
      title: article.title,
      description: article.content?.substring(0, 200),
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author?.data?.attributes?.name,
      images: [article.defaultImage.data?.attributes?.url].concat(images),
    },
  }
}

export default async function Article(props: SlugParamsProps) {
  const article = await getArticle(props)

  return (
    <Page name={article && article.title}>
      {article && <ArticleDetails article={article} />}
    </Page>
  )
}
