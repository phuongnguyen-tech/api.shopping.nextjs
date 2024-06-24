export interface Paging<T> {
  rows: T[];
  page: number;
  pageSize: number;
}
