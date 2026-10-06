// components/layout/PageContainer.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] py-0 md:py-6 lg:py-8">
      <div
        className={cn(
          "mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden bg-background shadow-xs md:rounded-[2rem] md:border md:border-border",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};