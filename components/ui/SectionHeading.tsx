// components/ui/SectionHeading.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title?: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  tag,
  title,
  description,
  light = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <span
        className={cn(
          "text-xs font-semibold tracking-widest uppercase",
          light ? "text-neutral-400" : "text-secondary"
        )}
      >
        /{tag}
      </span>
      {title && (
        <h2
          className={cn(
            "mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "mt-3 max-w-xl text-base md:text-lg",
            light ? "text-neutral-400" : "text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};