// components/layout/PageContainer.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className="min-h-screen w-full bg-[var(--color-bg)] py-0 transition-colors duration-300 md:py-6 lg:py-8">
      <div
        className={cn(
          "mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden bg-surface shadow-xs transition-colors duration-300 md:rounded-[2rem] md:border md:border-border",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};