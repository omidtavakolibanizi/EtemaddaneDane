import type { CSSProperties, ReactNode } from "react";

export type TProductCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  visual?: ReactNode;
  features?: string[];
  linkText?: string;
  className?: string;
  style?: CSSProperties;
};
