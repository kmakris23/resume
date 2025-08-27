export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  bio: string;
  github: string;
  yearsOfExperience: number;
}

export interface Skill {
  name: string;
  proficiency: number;
  category?: string;
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  type: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}