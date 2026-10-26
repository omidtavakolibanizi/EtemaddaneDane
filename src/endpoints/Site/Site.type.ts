export type TSiteSettings = {
  company_name: string;
  phone: string;
  email: string;
  address: string;
  maps_url?: string;
  instagram_url?: string;
};

export type TStatItem = {
  value: string;
  label: string;
};

export type THeroSlide = {
  image: string;
  alt?: string;
  title: string;
  subtitle?: string;
};

export type TSiteContent = {
  settings: TSiteSettings;
  stats: TStatItem[];
  hero_slides: THeroSlide[];
};
