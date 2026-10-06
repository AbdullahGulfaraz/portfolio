// components/work/SelectedWork.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const CATEGORIES = ["All", "Automation", "Mobile", "Web"] as const;

export const SelectedWork = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="border-t border-border px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <Reveal>
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <SectionHeading
            tag="SELECTED WORK"
            title="Digital Systems & Case Studies"
            description="A selection of recent projects built with Flutter, Next.js, and automated n8n pipelines."
            className="mb-8 md:mb-0"
          />

          {/* Theme-Adaptive Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-surface shadow-xs"
                      : "border border-border bg-surface text-secondary hover:text-primary hover:border-neutral-400 dark:hover:border-neutral-600"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Animated Filter Grid */}
      <motion.div layout className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};