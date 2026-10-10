import type { ReactNode } from "react";

export type TBadgeItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "badge" | "value";
  className?: string;
};
