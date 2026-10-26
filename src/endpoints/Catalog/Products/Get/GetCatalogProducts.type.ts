import type { TAPIRequestPaginated, TAPIResponsePaginatedBody } from "@/endpoints/Types";

import type { TProductListItem } from "../../Catalog.type";

/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

type TGetCatalogProductsRequestObjectParams = {
  category?: string;
};

type TGetCatalogProductsRequestObjectBody = {};

type TGetCatalogProductsRequestObject = TAPIRequestPaginated<
  TGetCatalogProductsRequestObjectParams,
  TGetCatalogProductsRequestObjectBody
>;

export type TGetCatalogProductsRequest = {
  request?: TGetCatalogProductsRequestObject;
};

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TGetCatalogProductsResponse = TAPIResponsePaginatedBody<TProductListItem>;
