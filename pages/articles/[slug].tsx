import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ArticleDetails from "../../components/articles/details";
import Page from "../../components/layout/page";
import { Article, ArticleDocument } from "../../models/graphql";

const ArticleDetail: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(ArticleDocument, {
    variables: { slug: slug },
  });
  const article = data?.articles?.data[0].attributes as Article;

  return (
    <Page
      name={article && article.title}
      description={article && article.summary}
      loading={loading}
      error={error}
    >
      {article && <ArticleDetails article={article} />}
    </Page>
  );
};

export default ArticleDetail;
