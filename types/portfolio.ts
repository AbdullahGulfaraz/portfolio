// types/portfolio.ts

export interface ProjectGalleryItem {
  src: string;
  title: string;
  caption: string;
}

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
  embedUrl?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  gallery?: string[]; // Just an array of image paths
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface Experience {
  id?: string;
  index?: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string | string[];
  skills?: string[];
  current?: boolean;
}

export interface SiteConfig {
  name: string;
  role: string;
  availability: string;
  description?: string;
  url?: string;
  ogImage?: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}