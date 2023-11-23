import ArticleDetails from "@/components/articles/details"
import Page from "@/components/layout/page"
import { getClient } from "@/libs/apollo-client"
import { SlugParamsProps } from "@/libs/slug-params"
import { Article, ArticleDocument, ArticleEntity } from "@/models/graphql"
import { getArticleSlugs } from "../../../components/articles/get.action"

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

async function getArticle({ params }: SlugParamsProps) {
  const { slug } = params
  const { data } = await getClient().query({
    query: ArticleDocument,
    variables: { slug },
  })

  return data?.articles?.data[0].attributes as Article
}
