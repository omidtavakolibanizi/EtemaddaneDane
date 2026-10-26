import type { TAPIRequestData } from "@/endpoints/Types";

import type { TInquiryInput, TInquiryOutput } from "../Inquiries.type";

/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

type TPostInquiryRequestObjectParams = {};

type TPostInquiryRequestObjectBody = TInquiryInput;

type TPostInquiryRequestObject = TAPIRequestData<
  TPostInquiryRequestObjectParams,
  TPostInquiryRequestObjectBody
>;

export type TPostInquiryRequest = {
  request: TPostInquiryRequestObject;
};

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TPostInquiryResponse = TInquiryOutput;
