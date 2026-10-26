import { AXIOS } from "@/utils/axiosInstance";

import type { TPostInquiryRequest, TPostInquiryResponse } from "./PostInquiry.type";

/**
 * ثبت درخواست سفارش / استعلام قیمت
 */
async function PostInquiry({ request }: TPostInquiryRequest): Promise<TPostInquiryResponse> {
  const { data } = await AXIOS.post<TPostInquiryResponse>("/inquiries/", request.body);
  return data;
}

export default PostInquiry;
