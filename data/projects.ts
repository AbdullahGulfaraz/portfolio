// data/projects.ts
import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "whatsapp-order-automation",
    title: "WhatsApp Order Automation",
    category: "Automation",
    year: "2026",
    role: "Backend & Automation",
    description: "An automated customer order collection pipeline connecting WhatsApp API, n8n, Firebase, and real-time dashboard notifications.",
    image: "/images/projects/whatsapp-automation.webp",
    tags: ["WhatsApp API", "n8n", "Firebase", "Docker"],
    featured: true,
    overview: "Built to streamline commercial inquiries and direct orders without human intervention at reception.",
    problem: "Manual customer messaging caused missed leads, delays, and scattered order records across chat histories.",
    solution: "Structured conversational ordering tree executed via n8n and synchronized directly into Firestore.",
    features: [
      "Automated chat conversational intake",
      "Real-time Firestore synchronization",
      "Admin alert triggers",
      "Zero-downtime containerized deployment"
    ],
  },
  {
    slug: "flutter-business-dashboard",
    title: "Flutter Business Dashboard",
    category: "Mobile",
    year: "2026",
    role: "Mobile App Developer",
    description: "Cross-platform mobile application providing real-time store metrics, live inventory counts, and push alerts.",
    image: "/images/projects/flutter-dashboard.webp",
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
    image: "/images/projects/chat-visualizer.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
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