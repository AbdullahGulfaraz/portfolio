// components/experience/Experience.tsx
import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export const Experience = () => {
  return (
    <section id="experience" className="bg-dark-surface px-6 py-20 text-white sm:px-8 md:px-12 md:py-28">
      <Reveal>
        <SectionHeading
          tag="EXPERIENCE"
          title="Background & Engineering Career"
          description="Applied technical positions, client-facing freelance work, and academic software engineering training."
          light
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Experience List */}
        <div className="divide-y divide-dark-secondary border-y border-dark-secondary lg:col-span-7">
          {experiences.map((item, idx) => (
            <Reveal key={`${item.company}-${idx}`} delay={idx * 0.1}>
              <div className="py-8">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-neutral-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.period}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-300">
                  {item.company}
                </p>

                {/* Description: Handles string array or single string */}
                {Array.isArray(item.description) ? (
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-neutral-400 list-disc list-inside">
                    {item.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-neutral-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                )}

                {/* Skills tags */}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-neutral-800/80 px-2 py-0.5 font-mono text-xs text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop Code / Workflow Visual Mockup */}
        <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-dark-secondary bg-[#1a1a1a] p-6 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-500">pipeline_runtime.log</span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-xs text-neutral-300 leading-relaxed">
                <code>{`[INIT] Booting automated webhook router...
[AUTH] Service tokens confirmed (200 OK)
[N8N] Listening for WhatsApp message triggers
[SYNC] Connecting Firestore stream handler...
[INFO] State: System running smoothly.`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};