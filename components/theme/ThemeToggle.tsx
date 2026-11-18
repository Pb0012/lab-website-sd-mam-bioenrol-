"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder to avoid layout shift during SSR/hydration
    return (
      <div
        className={`h-9 w-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/60 animate-pulse ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex items-center justify-center gap-2 h-9 px-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer ${
        isDark
          ? "bg-gradient-to-br from-emerald-950 via-[#062c22] to-[#041a14] text-amber-300 border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] shadow-[0_0_15px_rgba(16,185,129,0.25),inset_0_1px_1px_rgba(255,255,255,0.12)]"
          : "bg-white/85 backdrop-blur-md text-amber-600 border-white/90 hover:border-emerald-300 hover:bg-white shadow-[0_2px_8px_-1px_rgba(7,61,50,0.08),inset_0_1px_1.5px_rgba(255,255,255,1)] hover:shadow-[0_4px_12px_rgba(7,61,50,0.12),inset_0_1px_1.5px_rgba(255,255,255,1)]"
      } ${className}`}
    >
      <div className="relative h-4 w-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="h-4 w-4 text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.7)] transition-transform duration-300 rotate-0 scale-100 group-hover:-rotate-12" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500 transition-transform duration-300 rotate-0 scale-100 group-hover:rotate-45" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold capitalize select-none">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
}
