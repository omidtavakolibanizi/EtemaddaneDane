import { cacheLife } from "next/cache";

import { AXIOS } from "@/utils/axiosInstance";

import type { TProductListItem } from "../../Catalog.type";

import type {
  TGetCatalogProductsRequest,
  TGetCatalogProductsResponse,
} from "./GetCatalogProducts.type";

function normalizeProducts(
  data: TProductListItem[] | TGetCatalogProductsResponse,
): TGetCatalogProductsResponse {
  if (Array.isArray(data)) {
    return {
      count: data.length,
      next: null,
      previous: null,
      results: data,
    };
  }

  return data;
}

/**
 * لیست محصولات فعال (با فیلتر دسته و جستجو)
 */
async function GetCatalogProducts({
  request,
}: TGetCatalogProductsRequest = {}): Promise<TGetCatalogProductsResponse> {
  "use cache";
  cacheLife("hours");

  const { data } = await AXIOS.get<TProductListItem[] | TGetCatalogProductsResponse>(
    "/catalog/products/",
    { params: request?.params },
  );

  return normalizeProducts(data);
}

export default GetCatalogProducts;
