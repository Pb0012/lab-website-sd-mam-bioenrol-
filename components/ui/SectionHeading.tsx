import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900 dark:text-emerald-400 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
