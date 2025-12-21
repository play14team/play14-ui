import ArticleDetails from "@/components/articles/details"
import { getArticle, getArticleSlugs } from "@/components/articles/get.action"
import Page from "@/components/layout/page"
import { SlugParamsProps } from "@/libs/slug-params"
import type { Article } from "@/models/strapi"
import { notFound } from "next/navigation"

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const response = (await getArticleSlugs()) as {
      articles?: Article[]
    }
    const articles = response.articles || []
    console.log(`[Build] Pre-generating ${articles.length} article pages`)

    return articles.map((article) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.warn(
      "[Build] Failed to generate static params for articles:",
      error instanceof Error ? error.message : String(error),
    )
    console.warn("[Build] Articles will be generated on-demand at runtime")
    return []
  }
}

export async function generateMetadata(props: SlugParamsProps) {
  const article = await getArticle(props)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  const images = article.images
    ?.filter(Boolean)
    ?.map((i) => (i as { url: string }).url) as string[]

  return {
    title: `Articles | ${article.title}`,
    description: article.content?.substring(0, 200),
    openGraph: {
      title: article.title,
      description: article.content?.substring(0, 200),
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author?.name,
      images: [article.defaultImage?.url].concat(images),
    },
  }
}

export default async function Article(props: SlugParamsProps) {
  const article = await getArticle(props)

  if (!article) {
    notFound()
  }

  return (
    <Page name={article.title}>
      <ArticleDetails article={article} />
    </Page>
  )
}
