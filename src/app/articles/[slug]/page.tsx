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

  return {
    title: `#play14 - ${article.title}`,
    description: article.content,
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
