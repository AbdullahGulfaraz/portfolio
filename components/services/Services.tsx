// components/services/Services.tsx
"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(services[0].id);

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="border-t border-border px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <SectionHeading
        tag="SERVICES"
        title="Tailored Technical Capabilities"
        description="End-to-end engineering from system logic and automated backend pipelines to cross-platform client interfaces."
      />

      <div className="mt-12 divide-y divide-border border-y border-border">
        {services.map((service) => {
          const isOpen = expandedId === service.id;
          return (
            <div key={service.id} className="py-6 sm:py-8 transition-colors">
              <button
                onClick={() => toggleService(service.id)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-muted">{service.id}</span>
                  <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="mt-6 grid grid-cols-1 gap-6 pt-2 pl-0 sm:pl-12 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <p className="text-base leading-relaxed text-secondary">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-neutral-50 px-3 py-1 text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Key Deliverables
                    </h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-secondary">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};