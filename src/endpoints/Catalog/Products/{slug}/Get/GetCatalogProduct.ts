import { cacheLife } from "next/cache";

import { AXIOS } from "@/utils/axiosInstance";

import type {
  TGetCatalogProductRequest,
  TGetCatalogProductResponse,
} from "./GetCatalogProduct.type";

/**
 * جزئیات یک محصول فعال بر اساس slug
 */
async function GetCatalogProduct({
  slug,
}: TGetCatalogProductRequest): Promise<TGetCatalogProductResponse> {
  "use cache";
  cacheLife("hours");

  const { data } = await AXIOS.get<TGetCatalogProductResponse>(`/catalog/products/${slug}/`);
  return data;
}

export default GetCatalogProduct;
