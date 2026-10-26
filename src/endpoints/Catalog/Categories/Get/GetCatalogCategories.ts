import { cacheLife } from "next/cache";

import { AXIOS } from "@/utils/axiosInstance";

import type {
  TGetCatalogCategoriesRequest,
  TGetCatalogCategoriesResponse,
} from "./GetCatalogCategories.type";

/**
 * لیست دسته‌بندی‌های فعال محصولات
 */
async function GetCatalogCategories(
  _args?: TGetCatalogCategoriesRequest,
): Promise<TGetCatalogCategoriesResponse> {
  "use cache";
  cacheLife("hours");

  const { data } = await AXIOS.get<TGetCatalogCategoriesResponse>("/catalog/categories/");
  return data;
}

export default GetCatalogCategories;
