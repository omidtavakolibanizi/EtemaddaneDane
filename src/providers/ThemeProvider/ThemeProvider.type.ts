import type { ReactNode } from "react";

export type TTheme = "light" | "dark";

export type TThemeContextValue = {
  theme: TTheme;
  toggleTheme: () => void;
  setTheme: (theme: TTheme) => void;
};

export type TThemeProviderProps = {
  children: ReactNode;
};
