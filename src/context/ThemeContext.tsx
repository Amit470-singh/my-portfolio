"use client";

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // Synchronize initial theme on client mount after hydration
    const isDark =
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const initialTheme: Theme = isDark ? "dark" : "light";
    setThemeState(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    // Listen for system theme changes if user has not explicitly set a preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme: Theme = e.matches ? "dark" : "light";
        setThemeState(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    // Circular view transition if supported
    const doc = typeof document !== "undefined" ? (document as Document & {
      startViewTransition?: (updateCallback: () => void) => { ready: Promise<void> };
    }) : null;

    const isAppearanceTransition =
      doc?.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition || !doc.startViewTransition) {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem("theme", nextTheme);
      setThemeState(nextTheme);
      return;
    }

    let x = window.innerWidth / 2;
    let y = 0;

    if (event) {
      x = event.clientX;
      y = event.clientY;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem("theme", nextTheme);
      setThemeState(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: nextTheme === "dark" ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 350,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement:
            nextTheme === "dark"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        }
      );
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
