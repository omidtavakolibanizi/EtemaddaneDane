"use client";

import { useSyncExternalStore } from "react";

import { useTheme } from "@/providers/ThemeProvider";

import type { TThemeToggleProps } from "./ThemeToggle.type";

const emptySubscribe = () => () => {};

/**
 * دکمه تعویض پوسته روشن / تیره
 */
export function ThemeToggle({ className }: TThemeToggleProps): JSX.Element {
  /* State */
  const { theme, toggleTheme } = useTheme();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  /* Const */
  const isDark = isClient && theme === "dark";
  const ariaLabel = isDark ? "فعال‌سازی پوسته روشن" : "فعال‌سازی پوسته تیره";

  return (
    <button
      aria-label={ariaLabel}
      className={`theme-toggle ${className || ""}`}
      id="themeToggle"
      type="button"
      onClick={toggleTheme}
    >
      {isDark ? (
        <svg
          fill="none"
          height="17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="17"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          fill="none"
          height="17"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="17"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
