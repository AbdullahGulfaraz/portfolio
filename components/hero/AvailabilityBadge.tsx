// components/hero/AvailabilityBadge.tsx
import React from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  className?: string;
}

export const AvailabilityBadge = ({ className }: AvailabilityBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-green opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-status-green" />
      </span>
      <span>{siteConfig.availability}</span>
    </div>
  );
};