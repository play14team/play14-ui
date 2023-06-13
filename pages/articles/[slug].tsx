import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ArticleDetails from "../../components/articles/details";
import Page from "../../components/layout/page";
import { client } from "../../graphql/apollo";
import {
  Article,
  ArticleDocument,
  ArticleSlugsDocument,
} from "../../models/graphql";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: ArticleSlugsDocument });

  const paths = data.articles?.data?.map((s) => {
    const { slug } = s.attributes;
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ article: Article }> = async (
  context
) => {
  const { slug } = context.params;
  const { data } = await client.query({
    query: ArticleDocument,
    variables: { slug: slug },
  });

  const article = data?.articles?.data[0].attributes as Article;

  return {
    props: { article: article },
    revalidate: 10,
  };
};

const ArticleDetail: NextPage = (props: { article: Article }) => {
  const article = props.article;

  return (
    <Page
      name={article && article.title}
      description={article && article.summary}
    >
      {article && <ArticleDetails article={article} />}
    </Page>
  );
};

export default ArticleDetail;
