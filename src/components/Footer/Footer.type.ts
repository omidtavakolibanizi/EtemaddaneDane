export type TFooterContact = {
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  instagramUrl?: string;
};

export type TFooterProps = {
  className?: string;
  contact?: TFooterContact;
};
