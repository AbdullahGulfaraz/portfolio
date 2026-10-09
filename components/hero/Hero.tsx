// components/hero/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
    id="top"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-8 md:px-12 md:pt-32 md:pb-28"
    >
      <motion.div variants={itemVariants} className="w-full select-none text-center">
        <h1 className="hero-clamp font-extrabold uppercase tracking-tighter text-primary">
          {siteConfig.name}
        </h1>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-secondary"
          >
            {siteConfig.role}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl"
          >
            I design digital products and automate real business operations.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-relaxed text-secondary md:text-lg"
          >
            Specializing in Full-stack web development, Flutter mobile development, and robust n8n workflow automations that eliminate manual overhead.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#work" showArrow>
              Explore My Work
            </Button>
            <Button href="#contact" variant="outline">
              Let's Talk
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-6 border-t border-border pt-6 text-sm font-medium text-secondary"
          >
            <Link
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-primary"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Right Portrait */}
        <motion.div
          variants={itemVariants}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5"
        >
          <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-neutral-100 dark:bg-neutral-900 shadow-xl group">
            <Image
                src="/images/portrait.png"
                alt={`${siteConfig.name} - Portrait`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Subtle bottom gradient vignette to blend seamlessly */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent opacity-60 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};