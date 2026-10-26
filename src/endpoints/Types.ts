/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

export type TAPIRequestData<T = {}, U = {}> = {
  params?: T;
  body?: U;
};

export type TAPIRequestPaginatedParams = {
  page?: number;
  search?: string;
};

export type TAPIRequestPaginated<T = {}, U = {}> = TAPIRequestData<
  TAPIRequestPaginatedParams & T,
  U
>;

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TAPIResponsePaginatedBody<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
