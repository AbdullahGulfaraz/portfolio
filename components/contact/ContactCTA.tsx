// components/contact/ContactCTA.tsx
"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { AvailabilityBadge } from "@/components/hero/AvailabilityBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export const ContactCTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-border px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <AvailabilityBadge className="mb-6" />
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl md:text-6xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-secondary md:text-lg">
              Let&apos;s build something resilient, automated, and scalable. Reach out directly or submit your inquiry below.
            </p>

            <div className="mt-8 space-y-2 text-sm text-secondary">
              <p>
                Direct Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-primary underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <a
                  href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                  className="font-semibold text-primary underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contact Form Shell */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-border bg-surface p-8 text-center">
                <h3 className="text-xl font-bold text-primary">Inquiry Received</h3>
                <p className="mt-2 text-sm text-secondary">
                  Thank you for reaching out. I will respond to your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1.5">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-primary placeholder-neutral-400 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-primary placeholder-neutral-400 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1.5">
                    Project Type
                  </label>
                  <select className="w-full rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-primary focus:border-primary focus:outline-none">
                    <option>Full-Stack Web Application</option>
                    <option>Mobile App (Flutter)</option>
                    <option>Business Workflow Automation (n8n / WhatsApp)</option>
                    <option>Custom API & Backend Architecture</option>
                    <option>Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives or current challenges..."
                    className="w-full rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-primary placeholder-neutral-400 focus:border-primary focus:outline-none"
                  />
                </div>

                <Button type="submit" showArrow className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};