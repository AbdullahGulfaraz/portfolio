// data/projects.ts
import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  // data/projects.ts
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
  {
    slug: "whatsapp-order-automation",
    title: "WhatsApp-Based Order Automation System",
    description:
      "An end-to-end conversational commerce platform that automates customer order intake via WhatsApp Cloud API, an 18+ node n8n workflow engine, Firestore real-time persistence, and a Flutter merchant dashboard.",
    category: "Automation",
    role: "Backend & Automation Engineer",
    year: "2026",
    tags: [
      "WhatsApp Business API",
      "n8n",
      "Firebase Firestore",
      "Docker",
      "Flutter",
      "Firebase Auth",
      "ngrok",
      "Webhooks"
    ],
    image: "/images/projects/whatsapp-automation.png",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7484228002067836928?compact=1",
    featured: true,
    overview:
      "Small businesses across Pakistan rely predominantly on WhatsApp for customer interactions and manual order management. Handling this manually causes delayed response times, dropped orders, unorganized records, and operational friction. This project delivers a unified automation ecosystem: customers chat naturally with an automated WhatsApp bot to finalize orders, which instantly persist to a cloud database and populate a dedicated Flutter administrative dashboard in real time.",
    problem:
      "Manual order intake through personal or business WhatsApp numbers leads to high customer drop-off, missed inquiries during peak periods, human error in logging shipping addresses, and a lack of consolidated order tracking for merchant operations.",
    solution:
      "Architected an event-driven automation backend utilizing the Meta WhatsApp Business API and an n8n workflow engine running inside a Dockerized environment. Built a conversational state machine comprising 18+ custom nodes to validate user inputs, collect structured customer details (name, itemized cart, delivery address), and execute isolated atomic writes to Firebase Firestore. The orders synchronize immediately to a companion Flutter mobile dashboard secured via Firebase Authentication.",
    features: [
      "WhatsApp Cloud API Webhook Integration: Handles bidirectional payload reception and conversational state tracking with sub-second latency",
      "18+ Node n8n Workflow Engine: Manages dynamic conversational logic, data normalization, validation checkpoints, and fallback handlers",
      "Real-Time Firestore Cloud Pipeline: Atomic database writes with configured security rules for isolated merchant and customer records",
      "Docker & ngrok Deployment: Engineered a containerized local runtime environment with secure encrypted webhook tunneling",
      "Flutter Mobile Merchant App: Real-time order streams, status progression (Pending/Delivered), and Firebase Auth security",
      "Zero Manual Data Entry: Automatic customer profile capture, order summary generation, and instant receipt dispatches"
    ]
  },
];