export type TInquiryInput = {
  full_name: string;
  phone: string;
  product?: string;
  quantity?: string;
  province?: string;
  message?: string;
};

export type TInquiryOutput = {
  id: string;
  created_at: string;
};
