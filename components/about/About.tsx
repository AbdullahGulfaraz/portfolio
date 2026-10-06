// components/about/About.tsx
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const SKILL_GROUPS = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Dart", "TypeScript", "JavaScript", "Next.js", "Django", "Flutter"],
  },
  {
    category: "Automation & Integration",
    skills: ["n8n", "WhatsApp Business API", "REST APIs", "Webhooks", "Docker"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "Firebase Firestore", "Authentication", "Git / GitHub"],
  },
];

export const About = () => {
  return (
    <section id="about" className="border-t border-border px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              tag="ABOUT"
              title="Systems-first approach to software."
              description="Computer science background focused on building resilient software architecture and connecting dispersed tools into fluid, automated workflows."
            />
          </Reveal>
        </div>

        <div className="space-y-8 lg:col-span-7">
          {SKILL_GROUPS.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.1}>
              <div className="rounded-2xl border border-border p-6 bg-surface">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-neutral-100 dark:bg-neutral-800 px-3.5 py-1.5 text-xs font-medium text-primary shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};