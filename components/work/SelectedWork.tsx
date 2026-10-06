// components/work/SelectedWork.tsx
"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CATEGORIES = ["All", "Automation", "Mobile", "Web"] as const;

export const SelectedWork = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="border-t border-border px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="flex flex-col justify-between md:flex-row md:items-end">
        <SectionHeading
          tag="SELECTED WORK"
          title="Digital Systems & Case Studies"
          description="A selection of recent projects built with Flutter, Next.js, and automated n8n pipelines."
          className="mb-8 md:mb-0"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-secondary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};