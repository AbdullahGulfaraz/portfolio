// components/layout/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AvailabilityBadge } from "@/components/hero/AvailabilityBadge";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { lenisInstance } from "@/components/providers/SmoothScroll";

const NAV_ITEMS = [
  { label: "Home", targetId: "top" },
  { label: "Work", targetId: "work" },
  { label: "Services", targetId: "services" },
  { label: "Experience", targetId: "experience" },
  { label: "About", targetId: "about" },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near top
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 120) {
        // Scrolling down significantly -> hide
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 10) {
        // Scrolling up -> show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      if (targetId === "top") {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (lenisInstance) {
            lenisInstance.scrollTo(targetElement, { offset: -60, duration: 1.2 });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    } else {
      // If currently on /work/[slug], route back to homepage anchor
      router.push(`/#${targetId === "top" ? "" : targetId}`);
    }
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -90,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <header className="w-full max-w-5xl rounded-full border border-border/80 bg-surface/90 backdrop-blur-xl shadow-lg transition-all duration-300">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Brand / Clickable Status Badge */}
          <button
            onClick={(e) => handleNavClick(e, "top")}
            className="flex items-center gap-2 group focus:outline-none cursor-pointer text-left"
            title="Back to top"
          >
            <AvailabilityBadge className="hidden sm:inline-flex border-none shadow-none bg-neutral-100/80 dark:bg-neutral-800/80 py-1 transition-transform group-hover:scale-105" />
            <span className="text-base font-bold tracking-tight text-primary sm:hidden ml-2">
              AG.
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.targetId)}
                className="text-xs font-semibold uppercase tracking-wider text-secondary transition-colors duration-200 hover:text-primary cursor-pointer focus:outline-none"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls: Theme Toggle & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-surface px-4 h-9 text-xs font-medium transition-all hover:opacity-90 active:scale-95 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <span>↗</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border bg-surface px-6 py-5 rounded-b-3xl md:hidden"
            >
              <nav className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                    className="text-left text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary cursor-pointer py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-border">
                <button
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="w-full rounded-full bg-primary text-surface py-2.5 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-90 cursor-pointer"
                >
                  Let&apos;s Talk ↗
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};