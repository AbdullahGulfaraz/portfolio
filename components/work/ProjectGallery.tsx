"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { ProjectGalleryItem } from "@/types/portfolio";

interface ProjectGalleryProps {
  gallery?: ProjectGalleryItem[];
  title: string;
}

export function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = gallery || [];
  const hasImages = items.length > 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-20 border-t border-border pt-16">
      {/* Header and Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            Gallery & Interface
          </span>
          {hasImages && (
            <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-[11px] font-mono font-medium text-secondary border border-border">
              {currentIndex + 1} / {items.length}
            </span>
          )}
        </div>

        {items.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary active:scale-95"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary active:scale-95"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Gallery Showcase Card or Empty State */}
      {hasImages ? (
        <div className="group overflow-hidden rounded-2xl border border-border bg-surface p-3 sm:p-4 shadow-xl">
          {/* Main Slide Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={items[currentIndex].src}
              alt={items[currentIndex].title || `${title} screenshot`}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              priority={currentIndex === 0}
            />
          </div>

          {/* Caption & Metadata */}
          <div className="mt-4 px-2 pb-1">
            <h3 className="text-base font-semibold text-primary">
              {items[currentIndex].title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-secondary">
              {items[currentIndex].caption}
            </p>
          </div>

          {/* Dots Indicator */}
          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Empty Fallback State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 py-16 px-6 text-center">
          <div className="mb-3 rounded-full bg-neutral-100 dark:bg-neutral-800 p-3 text-muted">
            <ImageOff className="h-6 w-6" />
          </div>
          <p className="text-base font-semibold text-primary">
            No preview images available for this project
          </p>
          <p className="mt-1 max-w-sm text-xs text-muted">
            Screenshots and interactive UI runs for this project are currently being archived. Please refer to the live deployment or repository above.
          </p>
        </div>
      )}
    </section>
  );
}