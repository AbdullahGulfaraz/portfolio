"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

interface ProjectGalleryProps {
  gallery?: string[];
  title: string;
}

export function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = gallery || [];
  const hasImages = images.length > 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-20 border-t border-border pt-16">
      {/* Header and Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            Gallery & Interface
          </span>
          {hasImages && (
            <span className="rounded-full bg-neutral-100 dark:bg-neutral-800/80 px-2.5 py-0.5 text-[11px] font-mono font-medium text-secondary border border-border">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Gallery Showcase Card or Fallback */}
      {hasImages ? (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface p-2 sm:p-3 shadow-xl">
          {/* Main Slide Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-950">
            <Image
              src={images[currentIndex]}
              alt={`${title} preview screenshot ${currentIndex + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-contain"
              priority={currentIndex === 0}
            />
          </div>

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="my-3 flex items-center justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-7 bg-primary"
                      : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Empty Fallback State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/40 py-16 px-6 text-center">
          <div className="mb-3 rounded-full bg-neutral-100 dark:bg-neutral-800 p-3 text-muted">
            <ImageOff className="h-6 w-6" />
          </div>
          <p className="text-base font-semibold text-primary">
            No preview images available for this project
          </p>
          <p className="mt-1 max-w-sm text-xs text-muted">
            Live preview links or code demos are available in the project links above.
          </p>
        </div>
      )}
    </section>
  );
}