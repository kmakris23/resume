export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    experience: string;
    portfolio: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    downloadCV: string;
    viewProjects: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    professionalJourney: string;
    description: string;
    yearsExperience: string;
    projectsCompleted: string;
    companies: string;
    clientSatisfaction: string;
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    backend: string;
    frontend: string;
    tools: string;
  };
  
  // Experience Section
  experience: {
    title: string;
    subtitle: string;
    present: string;
    keyTechnologies: string;
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    viewDetails: string;
    liveDemo: string;
    allProjects: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    information: string;
    phone: string;
    email: string;
    location: string;
  };
  
  // Footer
  footer: {
    rightsReserved: string;
    builtWith: string;
  };
  
  // Aria Labels
  aria: {
    switchTheme: string;
    switchToLight: string;
    switchToDark: string;
  };
}

// English-only translations for the portfolio website
export const translations: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    portfolio: 'Portfolio',
    contact: 'Contact'
  },
  hero: {
    title: 'Full Stack Developer',
    subtitle: 'Building Digital Solutions',
    description: 'Driven by a passion for crafting software from the ground up, I love transforming vision into reality and building elegant, scalable solutions that solve real problems.',
    downloadCV: 'Get In Touch',
    viewProjects: 'View My Work'
  },
  about: {
    title: 'About Me',
    subtitle: 'years of experience in full-stack development',
    professionalJourney: 'Professional Journey',
    description: 'Based in Athens, Greece, I specialize in creating scalable web and mobile applications that solve real-world problems. My expertise spans the full development lifecycle, from initial concept to deployment and maintenance.',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
    companies: 'Companies',
    clientSatisfaction: 'Client Satisfaction'
  },
  skills: {
    title: 'Technical Skills',
    subtitle: 'Technologies I work with',
    backend: 'Backend & Database',
    frontend: 'Frontend & Mobile',
    tools: 'Tools & Cloud'
  },
  experience: {
    title: 'Work Experience',
    subtitle: 'My professional journey',
    present: 'Current',
    keyTechnologies: 'Key Technologies:'
  },
  portfolio: {
    title: 'Featured Projects',
    subtitle: 'Some of my recent work',
    viewDetails: 'View Details',
    liveDemo: 'Live Demo',
    allProjects: 'View All Projects'
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Let\'s discuss your next project',
    information: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    location: 'Location'
  },
  footer: {
    rightsReserved: 'All rights reserved. Built with Angular & TailwindCSS.',
    builtWith: 'Built with Angular & TailwindCSS'
  },
  aria: {
    switchTheme: 'Switch theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode'
  }
};