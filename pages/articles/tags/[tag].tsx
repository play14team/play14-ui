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
  const tag = router.query.tag as string;
  const [pageSize] = useState(18);
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(ArticlesDocument, {
    variables: { page: page, pageSize: pageSize, tag: tag },
  });

  const articles = data?.articles?.data as ArticleEntity[];
  const pagination = data?.articles?.meta.pagination as Pagination;

  return (
    <Page name={`Articles - Tag : ${tag}`} loading={loading} error={error}>
      {data && (
        <>
          {pagination.pageCount > 1 && (
            <Paging
              pagination={pagination}
              onNextPage={(nextPage) => setPage(nextPage)}
            />
          )}
          <ArticleGrid articles={articles} />
          {pagination.pageCount > 1 && (
            <Paging
              pagination={pagination}
              onNextPage={(nextPage) => setPage(nextPage)}
            />
          )}
        </>
      )}
    </Page>
  );
};

export default ArticlesByTag;
