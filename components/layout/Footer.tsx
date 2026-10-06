// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16 px-6 sm:px-8 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          {/* Brand & Positioning */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm text-secondary leading-relaxed">
              {siteConfig.role}. Specializing in robust web portals, cross-platform apps, and automated workflows.
            </p>
          </div>

          {/* Direct Social & Contact Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-secondary">
            <Link
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              Email <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/60 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};