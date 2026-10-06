// types/portfolio.ts
export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "Automation" | "Full Stack";
  year: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
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