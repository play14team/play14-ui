export interface DataProps<T> {
  data: T;
  meta: Meta;
}

export interface Slug {
  slug: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
