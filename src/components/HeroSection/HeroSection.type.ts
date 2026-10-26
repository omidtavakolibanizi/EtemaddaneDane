export type THeroSlide = {
  image: string;
  title: string;
  subtitle?: string;
  alt?: string;
};

export type THeroSectionProps = {
  className?: string;
  slides?: THeroSlide[];
};
