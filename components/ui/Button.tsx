// components/ui/Button.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  showArrow?: boolean;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button = ({
  href,
  variant = "primary",
  showArrow = false,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-black active:scale-[0.98]",
    secondary: "bg-neutral-100 text-primary hover:bg-neutral-200 active:scale-[0.98]",
    outline: "border border-border text-primary hover:bg-neutral-50 active:scale-[0.98]",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {content}
    </button>
  );
};