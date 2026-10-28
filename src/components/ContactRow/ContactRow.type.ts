import type { ReactNode } from "react";

export type TContactRowProps = {
  href?: string;
  icon: ReactNode;
  label: string;
  value: string;
  isLtr?: boolean;
  external?: boolean;
  className?: string;
};
