import ArticleDetails from "@/components/articles/details"
import { getArticle, getArticleSlugs } from "@/components/articles/get.action"
import Page from "@/components/layout/page"
import { SlugParamsProps } from "@/libs/slug-params"
import { ArticleEntity } from "@/models/graphql"

export async function generateStaticParams() {
  const { data } = await getArticleSlugs()
  const articles = data.articles?.data as ArticleEntity[]

  return articles.map((article) => ({
    slug: article.attributes?.slug!,
  }))
}

export async function generateMetadata(props: SlugParamsProps) {
  const article = await getArticle(props)
  const images = article.images?.data.map((i) => i.attributes?.url!) as string[]

  return {
    title: `Articles | ${article.title}`,
    description: article.content?.substring(0, 200),
    openGraph: {
      title: article.title,
      description: article.content?.substring(0, 200),
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author?.data?.attributes?.name,
      images: [article.defaultImage.data?.attributes?.url!].concat(images),
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
