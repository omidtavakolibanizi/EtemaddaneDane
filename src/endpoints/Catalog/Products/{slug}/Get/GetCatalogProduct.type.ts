import type { TAPIRequestData } from "@/endpoints/Types";

import type { TProductDetail } from "../../../Catalog.type";

/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

type TGetCatalogProductRequestObjectParams = {};

type TGetCatalogProductRequestObjectBody = {};

type TGetCatalogProductRequestObject = TAPIRequestData<
  TGetCatalogProductRequestObjectParams,
  TGetCatalogProductRequestObjectBody
>;

export type TGetCatalogProductRequest = {
  slug: string;
  request?: TGetCatalogProductRequestObject;
};

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TGetCatalogProductResponse = TProductDetail;
