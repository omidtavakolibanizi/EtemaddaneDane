"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  TTheme,
  TThemeContextValue,
  TThemeProviderProps,
} from "./ThemeProvider.type";

const ThemeContext = createContext<TThemeContextValue | null>(null);

const STORAGE_KEY = "edsk-theme";

const THEME_CHANGE_EVENT = "edsk-theme-change";

function readTheme(): TTheme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch {
    // fallback
  }
  return "light";
}

/**
 * مدیریت تم تیره و روشن سایت
 */
export function ThemeProvider({ children }: TThemeProviderProps): JSX.Element {
  /* State */
  const [theme, setThemeState] = useState<TTheme>("light");

  /* Effects */
  useEffect(() => {
    setThemeState(readTheme());

    const onChange = () => setThemeState(readTheme());
    window.addEventListener("storage", onChange);
    window.addEventListener(THEME_CHANGE_EVENT, onChange);

    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    };
  }, []);

  /* Function */
  const applyTheme = useCallback((nextTheme: TTheme) => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // ignore storage errors
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: TTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }, [theme, applyTheme]);

  const setTheme = useCallback(
    (nextTheme: TTheme) => {
      applyTheme(nextTheme);
    },
    [applyTheme],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * هوک دریافت تم جاری و تابع تغییر تم
 */
export function useTheme(): TThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
