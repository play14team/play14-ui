import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ArticleDetails from "../../components/articles/details";
import ErrorMessage from "../../components/layout/error";
import Loader from "../../components/layout/loader";
import { ArticleDocument } from "../../models/graphql";

const ArticleDetail: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, loading, error } = useQuery(ArticleDocument, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  const articleDetails = data?.articles?.data[0].attributes;
  if (!articleDetails) {
    return <>Article {slug} not found!</>;
  }

  return <ArticleDetails article={articleDetails} />;
};

export default ArticleDetail;
