import type { NextPage } from "next";
import Page from "../../../components/layout/page";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import ArticleGrid from "../../../components/articles/grid";
import Paging from "../../../components/layout/paging";
import {
  ArticleEntity,
  ArticlesDocument,
  Pagination,
} from "../../../models/graphql";
import { useRouter } from "next/router";

const ArticlesByTag: NextPage = () => {
  const router = useRouter();
  const category = router.query.category as string;
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(ArticlesDocument, {
    variables: { page: page, pageSize: pageSize, category: category },
  });

  const articles = data?.articles?.data as ArticleEntity[];
  const pagination = data?.articles?.meta.pagination as Pagination;

  return (
    <Page
      name={`Articles - Category : ${category}`}
      loading={loading}
      error={error}
    >
      {data && (
        <>
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
          <ArticleGrid articles={articles} />
          <Paging
            pagination={pagination}
            onNextPage={(nextPage) => setPage(nextPage)}
          />
        </>
      )}
    </Page>
  );
};

export default ArticlesByTag;
