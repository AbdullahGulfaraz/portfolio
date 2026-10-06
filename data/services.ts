// data/services.ts
import { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description: "Architecting responsive, high-performance web applications using modern React/Next.js frameworks and robust Python/Django backends.",
    deliverables: ["Custom Web Apps", "API Integration", "Database Architecture", "Responsive Portals"],
    tags: ["Next.js", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    id: "02",
    title: "Business Process & Workflow Automation",
    description: "Eliminating manual operational tasks by chaining webhooks, business communication channels, and automated decision flows.",
    deliverables: ["WhatsApp Bot Automations", "n8n Pipelines", "CRM Data Sync", "Webhook Integrations"],
    tags: ["n8n", "WhatsApp API", "Webhooks", "Docker"],
  },
  {
    id: "03",
    title: "Cross-Platform Mobile Apps (Flutter)",
    description: "Developing native-speed, intuitive iOS and Android applications backed by real-time cloud data layers.",
    deliverables: ["Mobile Dashboards", "Cross-Platform UI", "State Architecture", "Firebase Integration"],
    tags: ["Flutter", "Dart", "Firebase", "State Management"],
  },
  {
    id: "04",
    title: "API Design & Cloud Integrations",
    description: "Building resilient microservices, secure authorization flows, and reliable third-party webhook ingestions.",
    deliverables: ["RESTful API Endpoints", "Auth Workflows", "Third-Party Connectors", "Cloud Deployments"],
    tags: ["Python", "FastAPI", "Docker", "Firebase"],
  },
];