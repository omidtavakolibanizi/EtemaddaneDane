import type { ReactNode } from "react";

export type TStatItem = {
  value: string;
  label: string;
  icon: ReactNode;
};

export type TStatsBandProps = {
  items?: TStatItem[];
  className?: string;
};
