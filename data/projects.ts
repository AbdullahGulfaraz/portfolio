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
  embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7484228002067836928?compact=1",  githubUrl: "https://github.com/your-username/whatsapp-order-pipeline", // (Optional: omit if private)
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
    title: "WhatsApp Chat Visualizer",
    category: "Web",
    year: "2026",
    role: "Frontend Developer",
    description: "Client-side analytics tool parsing WhatsApp text exports into interactive conversational metrics and media summaries.",
    image: "/images/projects/chat-visualizer.png",
    tags: ["HTML5", "CSS3", "Tailwind CSS"],
    featured: true,
    demoUrl: "https://whatsappchatvisualizer.vercel.app",
    overview: "A privacy-centric web tool parsing and visualising message logs entirely client-side.",
    problem: "Standard chat exports produce unwieldy plain text files difficult to scan or analyze.",
    solution: "In-browser regex parsing engine providing chronological timeline distributions and statistics.",
    features: [
      "100% in-browser processing with zero server uploads",
      "Message velocity and volume graphs",
      "Top contributor and response time stats"
    ],
  },
];