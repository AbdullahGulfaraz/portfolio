// components/about/About.tsx
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
          <SectionHeading
            tag="ABOUT"
            title="Systems-first approach to software."
            description="Computer science background focused on building resilient software architecture and connecting dispersed tools into fluid, automated workflows."
          />
        </div>

        <div className="space-y-8 lg:col-span-7">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="rounded-2xl border border-border p-6 bg-neutral-50/50">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-primary shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};