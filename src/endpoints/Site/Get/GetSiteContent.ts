import { cacheLife } from "next/cache";

import { AXIOS } from "@/utils/axiosInstance";

import type { TGetSiteContentRequest, TGetSiteContentResponse } from "./GetSiteContent.type";

/**
 * دریافت محتوای مشترک سایت (تنظیمات تماس، آمار و اسلایدهای هیرو)
 */
async function GetSiteContent(
  _args?: TGetSiteContentRequest,
): Promise<TGetSiteContentResponse> {
  "use cache";
  cacheLife("hours");

  const { data } = await AXIOS.get<TGetSiteContentResponse>("/site/");
  return data;
}

export default GetSiteContent;
