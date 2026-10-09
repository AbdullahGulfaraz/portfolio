// data/experience.ts
import { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "ChatFlow (whatsappchatvisualizer.vercel.app)",
    role: "Full-Stack Developer & UI Architect",
    period: "Oct 2026 — Present",
    location: "Independent / Production",
    current: true,
    description: [
      "Engineered an entirely in-memory client-side parsing pipeline to ingest, clean, and reconstruct WhatsApp .txt and .zip exports into responsive chat simulations.",
      "Ensured zero-server privacy by executing all parsing and media handling client-side without storing or transmitting personal message data.",
      "Implemented dynamic perspective switching, multi-format timestamp reconciliation (iOS vs. Android), real-time query search, and clean PDF/JSON export utilities."
    ],
    skills: [ "HTML5", "CSS3", "Tailwind CSS", "JSZip", "Vercel"]
  },
  {
    company: "Techset Solutions",
    role: "Software Engineering Intern",
    period: "Jul 2026 — Aug 2026",
    location: "Islamabad, Pakistan",
    current: false,
    description: [
      "Focused on core Python development, applying object-oriented design patterns and clean code principles.",
      "Learned and implemented Django web applications, handling model architectures, ORM queries, and backend routing.",
      "Diagnosed and resolved code bugs, optimized backend logic, and contributed to technical problem-solving across internal features."
    ],
    skills: ["Python", "Django", "OOP", "Debugging", "Git", "Relational Databases"]
  },
  {
    company: "WhatsApp Order Automation System",
    role: "Backend & Automation Engineer",
    period: "May 2026 — Jun 2026",
    location: "Client / Independent",
    current: false,
    description: [
      "Architected an event-driven webhook pipeline using Meta's WhatsApp Business API to eliminate manual order logging for local businesses.",
      "Designed an 18+ node n8n state machine handling dynamic conversational flows, state management, input validation, and automated customer receipts.",
      "Configured a real-time Firebase Firestore database with isolated security rules and containerized the local runtime using Docker and ngrok."
    ],
    skills: ["WhatsApp Business API", "n8n", "Firebase Firestore", "Docker", "Webhooks", "ngrok"]
  }
];