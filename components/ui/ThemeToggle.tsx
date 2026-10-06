// components/ui/ThemeToggle.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-24 rounded-full border border-border bg-neutral-100/50 dark:bg-neutral-900/50" />
    );
  }

  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-1 shadow-2xs">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
          theme === "light"
            ? "bg-primary text-surface dark:text-surface"
            : "text-secondary hover:text-primary"
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
      </button>

      <button
        onClick={() => setTheme("system")}
        aria-label="System preference"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
          theme === "system"
            ? "bg-primary text-surface dark:text-surface"
            : "text-secondary hover:text-primary"
        }`}
      >
        <Laptop className="h-3.5 w-3.5" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
          theme === "dark"
            ? "bg-primary text-surface dark:text-surface"
            : "text-secondary hover:text-primary"
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};