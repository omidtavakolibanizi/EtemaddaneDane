export type TCategorySimple = {
  id: string;
  name: string;
  slug: string;
};

export type TCategory = TCategorySimple & {
  description?: string;
  product_count: number;
};

export type TProductListItem = {
  id: string;
  name: string;
  slug: string;
  short_description?: string;
  image?: string | null;
  image_alt?: string;
  category: TCategorySimple;
};

export type TProductFeatureKind = "feature" | "spec";

export type TProductFeature = {
  kind?: TProductFeatureKind;
  text: string;
};

export type TProductDetail = {
  id: string;
  name: string;
  slug: string;
  short_description?: string;
  description?: string;
  image?: string | null;
  image_alt?: string;
  category: TCategorySimple;
  features: TProductFeature[];
};
