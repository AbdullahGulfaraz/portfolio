// data/projects.ts
import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  // data/projects.ts
{
  slug: "whatsapp-order-automation",
  title: "WhatsApp Business Order Automation",
  description: "End-to-end webhook architecture connecting WhatsApp Cloud API with n8n and Firebase Firestore for autonomous order capture.",
  category: "Automation",
  role: "Lead Automation Engineer",
  year: "2026",
  tags: ["n8n", "WhatsApp Cloud API", "Firebase", "Webhooks", "Docker"],
  image: "/images/projects/whatsapp-automation.png",
  demoUrl: "https://lnkd.in/p/dd6hmq3j", // Direct post link
  embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7484228002067836928?compact=1",  
  overview: "Engineered an autonomous order processing engine for conversational commerce on WhatsApp.",
  problem: "Manual customer order intake suffered from latency, message drop-offs, and delayed inventory updates.",
  solution: "Constructed an event-driven webhook pipeline via n8n that validates incoming WhatsApp payloads, writes confirmed records to Firestore, and pushes automated status receipts back to the buyer.",
  features: [
    "Sub-second incoming webhook trigger verification",
    "Conversational decision tree with dynamic reply payloads",
    "Atomic Firestore document writes for transaction isolation",
    "Automated PDF invoice generation and media dispatch"
  ]
  },
  {
    slug: "flutter-business-dashboard",
    title: "Flutter Business Dashboard",
    category: "Mobile",
    year: "2026",
    role: "Mobile App Developer",
    description: "Cross-platform mobile application providing real-time store metrics, live inventory counts, and push alerts.",
    image: "/images/projects/flutter-dashboard.png",
    tags: ["Flutter", "Dart", "Firebase", "State Management"],
    featured: true,
    overview: "A lightweight administrative portal designed for on-the-go order and inventory oversight.",
    problem: "Store managers required instantaneous updates without tethering to desktop environments.",
    solution: "Reactive Flutter UI linked to Firestore streams for low-latency live synchronization.",
    features: [
      "Live order updates without pull-to-refresh",
      "Role-based authentication",
      "Offline cache support",
      "Instant push dispatch"
    ],
  },
  {
    slug: "whatsapp-chat-visualizer",
    title: "ChatFlow — WhatsApp Chat Visualizer & Analytics",
    description:
      "A privacy-first web application that transforms raw WhatsApp .zip archives and .txt exports into an interactive, authentic conversation interface with zero server-side transmission.",
    category: "Web",
    role: "Full-Stack Developer & UI Architect",
    year: "2026",
    tags: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JSZip",
      "Vercel"
    ],
    image: "/images/projects/chat-visualizer.png",
    demoUrl: "https://whatsappchatvisualizer.vercel.app",
    githubUrl: "https://github.com/AbdullahGulfaraz/WhatsAppChatVisualizer",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7512531456779390976?compact=1",
    overview:
      "Exported WhatsApp conversations are stored as flat, messy plain-text files or compressed .zip archives cluttered with inconsistent timestamps, missed call entries, and raw attachment references. ChatFlow ingests these files and reconstructs them into an authentic, responsive messaging interface featuring dynamic participant alignment, instant keyword search, and dark/light themes—running 100% in-browser with zero external server dependencies.",
    problem:
      "Users looking to reread, search, or review meaningful chat archives are forced to scroll through disjointed raw text or upload private, sensitive communication logs to untrusted third-party cloud tools that risk data exposure.",
    solution:
      "Engineered an entirely in-memory client-side parsing pipeline using JSZip and an adaptive regex engine. The application handles multi-platform timestamps (iOS bracketed logs and Android 12h/24h), purges invisible Unicode noise, auto-detects conversation participants for dynamic perspective switching, and renders a realistic chat environment complete with live search and structured JSON/PDF export capabilities.",
    features: [
      "100% Client-Side Privacy: All parsing and rendering execute entirely in-memory with zero server transmissions",
      ".zip & .txt Dual Ingestion: Automated extraction of iOS (_chat.txt) and Android archives directly in the browser via JSZip",
      "Universal Multi-Format Parser: Seamless reconciliation of iOS bracket timestamps and Android 12h/24h variants",
      "Noise & Unicode Filtering: Systematic sanitization of phantom call records, empty lines, and invisible Unicode spaces (\\u200B, \\u202F, \\u00A0)",
      "Dynamic Perspective Switcher: Auto-detects participants and re-aligns speech bubbles dynamically based on the selected user",
      "Live In-Chat Search: Instant query filtering across conversation history with inline keyword highlights and match counters",
      "Data Export & Print: High-fidelity print-to-PDF formatting and clean JSON export utilities"
    ]
  },
];