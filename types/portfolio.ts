// types/portfolio.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  category: "Automation" | "Mobile" | "Web";
  role: string;
  year: string;
  tags: string[];
  featured?: boolean;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  embedUrl?: string; // LinkedIn or YouTube embed iframe URL
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface Experience {
  id: string;
  index: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  availability: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}