// components/layout/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AvailabilityBadge } from "@/components/hero/AvailabilityBadge";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12">
        {/* Availability Badge / Brand */}
        <div className="flex items-center gap-4">
          <AvailabilityBadge className="hidden sm:inline-flex" />
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-primary sm:hidden"
          >
            AG.
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-secondary transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="#contact" showArrow className="hidden sm:inline-flex">
            Let&apos;s Talk
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
      </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-6 py-6 md:hidden">
          <div className="mb-6 flex justify-start">
            <AvailabilityBadge />
          </div>
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-secondary transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-border">
            <Button
              href="#contact"
              showArrow
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};