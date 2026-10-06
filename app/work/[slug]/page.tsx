// app/work/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { AvailabilityBadge } from "@/components/hero/AvailabilityBadge";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all project slugs
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Abdullah Gulfaraz`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get other projects for "More Work" section
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="px-6 pt-28 pb-12 sm:px-8 md:px-12 md:pt-32 md:pb-16 transition-colors duration-300">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Work</span>
        </Link>
        <AvailabilityBadge />
      </div>

      {/* Case Study Hero */}
      <header className="mt-12 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <span className="text-xs text-muted">/</span>
          <span className="text-xs font-mono text-secondary">{project.year}</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-secondary sm:text-xl">
          {project.description}
        </p>

        {/* Quick Meta Breakdown */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4">
          <div>
            <span className="block text-xs font-semibold uppercase text-muted">Role</span>
            <span className="mt-1 block text-sm font-medium text-primary">{project.role}</span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase text-muted">Timeline</span>
            <span className="mt-1 block text-sm font-medium text-primary">{project.year}</span>
          </div>
          <div className="col-span-2">
            <span className="block text-xs font-semibold uppercase text-muted">Tech Stack</span>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-sm bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live Demo or Repo Links if present */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.demoUrl && (
              <Button href={project.demoUrl} target="_blank" rel="noopener noreferrer" showArrow>
                View Live Deployment
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" showArrow>
                Inspect Repository
              </Button>
            )}
          </div>
        )}
      </header>

      {/* Main Mockup / Hero Showcase Image */}
      <section className="mt-14">
        <div className="aspect-16/9 w-full overflow-hidden rounded-2xl border border-border bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-secondary text-sm">
          <span>{project.title} — Main Showcase / Architecture Diagram</span>
        </div>
      </section>

      {/* Detailed Case Study Sections */}
      <div className="mt-20 max-w-4xl space-y-16">
        {/* 01 — Overview */}
        {project.overview && (
          <section>
            <span className="text-xs font-mono text-muted uppercase tracking-widest">01 — Overview</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary">Context & Objective</h2>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              {project.overview}
            </p>
          </section>
        )}

        {/* 02 — Problem */}
        {project.problem && (
          <section>
            <span className="text-xs font-mono text-muted uppercase tracking-widest">02 — Problem</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary">The Bottleneck</h2>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              {project.problem}
            </p>
          </section>
        )}

        {/* 03 — Solution */}
        {project.solution && (
          <section>
            <span className="text-xs font-mono text-muted uppercase tracking-widest">03 — Solution</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary">System Architecture & Engineering</h2>
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">
              {project.solution}
            </p>
          </section>
        )}

        {/* 04 — Key Features */}
        {project.features && project.features.length > 0 && (
          <section>
            <span className="text-xs font-mono text-muted uppercase tracking-widest">04 — Core Deliverables</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary">Implemented Capabilities</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.features.map((feature: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 shadow-2xs"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Gallery Section */}
      <section className="mt-20 border-t border-border pt-16">
        <span className="text-xs font-mono text-muted uppercase tracking-widest">Gallery & Interface</span>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="aspect-4/3 rounded-xl border border-border bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-xs text-muted">
            <span>Visual Interface 01</span>
          </div>
          <div className="aspect-4/3 rounded-xl border border-border bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-xs text-muted">
            <span>Visual Interface 02</span>
          </div>
        </div>
      </section>

      {/* More Work Section */}
      {otherProjects.length > 0 && (
        <section className="mt-24 border-t border-border pt-16">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              /MORE WORK[cite: 1]
            </span>
            <Link
              href="/#work"
              className="text-xs font-semibold uppercase tracking-wider text-primary underline"
            >
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}