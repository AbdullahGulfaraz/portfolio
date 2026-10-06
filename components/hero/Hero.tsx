// components/hero/Hero.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-20 sm:px-8 md:px-12 md:pt-16 md:pb-28">
      {/* Huge Responsive Typography Name */}
      <div className="w-full select-none text-center">
        <h1 className="hero-clamp font-extrabold uppercase tracking-tighter text-primary">
          {siteConfig.name}
        </h1>
      </div>

      {/* Main Grid: Portrait and Information */}
      <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left / Bottom Copy: Titles and Positioning */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-secondary">
            {siteConfig.role}
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
            I design digital products and automate real business operations.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            Specializing in Flutter mobile development, Django full-stack systems, and robust n8n workflow automations that eliminate manual overhead.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#work" showArrow>
              Explore Selected Work
            </Button>
            <Button href="#contact" variant="outline">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Social Quick-Links */}
          <div className="mt-10 flex items-center gap-6 border-t border-border pt-6 text-sm font-medium text-secondary">
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
          </div>
        </div>

        {/* Right / Top: Editorial Portrait Placeholder */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-neutral-100 grayscale transition-all duration-500 hover:grayscale-0">
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs text-muted">
              <span>High-Contrast Cutout Portrait</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};