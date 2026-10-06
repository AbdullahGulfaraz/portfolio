// components/work/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-600 sm:p-8"
    >
      <div>
        {/* Project Image Container */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-border bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Subtle dark gradient overlay to make tags/contrast look polished */}
          <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-opacity group-hover:opacity-0" />
        </div>

        {/* Metadata */}
        <div className="mt-6 flex items-center justify-between text-xs text-secondary">
          <span className="font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>

        {/* Title & Description */}
        <h3 className="mt-3 text-xl font-bold tracking-tight text-primary transition-colors group-hover:text-secondary sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>
      </div>

      {/* Footer Tags & Arrow */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-surface">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};