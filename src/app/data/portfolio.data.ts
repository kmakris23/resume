/*
 * Portfolio Data Configuration
 * 
 * This file contains all the content data for the portfolio website.
 * You can easily update your information by modifying the values below.
 * 
 * IMPORTANT: After making changes, run `npm run build:prod` to build the website.
 * 
 * CONTENT SECTIONS:
 * - Personal Information
 * - Technical Skills 
 * - Work Experience
 * - Featured Projects
 * - Education
 * - Contact Information
 */

import { PersonalInfo, Skill, Experience, Education, Project, ContactInfo } from '../models/portfolio.models';

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================
// Update your basic information here
export const personalInfo: PersonalInfo = {
  name: 'Kostas Makris',
  title: 'Full Stack Developer', 
  location: 'Athens, Greece',
  phone: '+30-698-287-6947',
  email: 'contact@kmakris.gr',
  bio: 'Driven by a passion for crafting software from the ground up, I love transforming vision into reality and building elegant, scalable solutions that solve real problems.',
  github: 'https://github.com/kmakris23',
  yearsOfExperience: 8 // Update this number as needed
};

// =============================================================================
// TECHNICAL SKILLS
// =============================================================================
// Add, remove, or modify your technical skills here
// Proficiency scale: 0-100 (where 100 is expert level)
export const skills: { backend: Skill[]; frontend: Skill[]; tools: Skill[] } = {
  
  // Backend & Database Technologies
  backend: [
    { name: 'C#', proficiency: 100, category: 'backend' },
    { name: '.NET', proficiency: 100, category: 'backend' },
    { name: '.NET Core', proficiency: 100, category: 'backend' },
    { name: 'MySQL', proficiency: 100, category: 'database' },
    { name: 'SQL Server', proficiency: 90, category: 'database' },
    { name: 'PostgreSQL', proficiency: 85, category: 'database' }
  ],
  
  // Frontend & Mobile Technologies
  frontend: [
    { name: 'JavaScript', proficiency: 100, category: 'frontend' },
    { name: 'TypeScript', proficiency: 95, category: 'frontend' },
    { name: 'Angular', proficiency: 100, category: 'frontend' },
    { name: 'React', proficiency: 70, category: 'frontend' },
    { name: 'Ionic', proficiency: 90, category: 'mobile' },
    { name: 'HTML/CSS', proficiency: 100, category: 'frontend' }
  ],
  
  // Tools & Cloud Technologies
  tools: [
    { name: 'Git', proficiency: 95, category: 'tools' },
    { name: 'Docker', proficiency: 80, category: 'tools' },
    { name: 'SignalR', proficiency: 85, category: 'tools' },
    { name: 'Entity Framework', proficiency: 90, category: 'tools' },
    { name: 'Azure', proficiency: 75, category: 'cloud' },
    { name: 'AWS', proficiency: 70, category: 'cloud' }
  ]
};

// =============================================================================
// WORK EXPERIENCE
// =============================================================================
// List your work experience in reverse chronological order (most recent first)
// Each job should include: company, location, position, period, achievements, and technologies used
export const experience: Experience[] = [
  {
    company: 'Scalarflow',
    location: 'Athens',
    position: 'Full Stack Developer',
    period: '2020 - Current',
    achievements: [
      'Developed scalable web and mobile applications using Angular, .NET, and MySQL',
      'Built financial platform for REIT analysis and reporting with complex data visualization',
      'Created cross-platform social networking app with Ionic/Angular serving 10K+ users',
      'Contributed to admin dashboards and customer-facing apps as part of collaborative development team',
      'Implemented real-time features using SignalR for live data updates'
    ],
    technologies: ['Angular', '.NET', 'MySQL', 'Ionic', 'SignalR', 'Azure']
  },
  {
    company: 'Menayas',
    location: 'Athens',
    position: 'Frontend Developer',
    period: '2019 - 2022',
    achievements: [
      'Developed responsive customer-facing applications and admin dashboards using React and Angular',
      'Worked with high-profile clients including BoostedBoards and Getaround',
      'Delivered performant and user-friendly frontend solutions with 99.9% uptime',
      'Collaborated with backend teams to integrate RESTful APIs and GraphQL endpoints',
      'Improved application performance by 40% through code optimization and lazy loading'
    ],
    technologies: ['React', 'Angular', 'TypeScript', 'Redux', 'SASS', 'Webpack']
  },
  {
    company: 'Wizcom',
    location: 'Larissa',
    position: 'Full Stack Developer',
    period: '2017 - 2019',
    achievements: [
      'Used .NET Core, Angular, SignalR, C#, and SQL Server for enterprise applications',
      'Built comprehensive company CRM system managing 1000+ customer records',
      'Created self-service kiosk system deployed across 15+ locations',
      'Developed data reporting portal for ΔΕΗ (Public Power Corporation) used by 100+ managers',
      'Implemented real-time monitoring dashboard for hydroelectric stations',
      'Collaborated with cross-functional teams to deliver projects on time and within budget'
    ],
    technologies: ['.NET Core', 'Angular', 'SignalR', 'C#', 'SQL Server', 'Entity Framework']
  }
];

// =============================================================================
// FEATURED PROJECTS
// =============================================================================
// Add your key projects here. Set "featured: true" for projects to appear 
// in the main projects section. Featured projects are displayed prominently.
export const projects: Project[] = [
  {
    name: 'Financial REIT Analysis Platform',
    description: 'A comprehensive financial platform for Real Estate Investment Trust (REIT) analysis and reporting. Features include portfolio tracking, performance analytics, risk assessment, and automated reporting. Built with scalability in mind to handle large datasets and real-time market data.',
    technologies: ['Angular', '.NET Core', 'MySQL', 'Chart.js', 'SignalR'],
    type: 'Web Application',
    featured: true // Set to true to feature this project
  },
  {
    name: 'Cross-Platform Social Network',
    description: 'Social networking application designed for cross-platform deployment with real-time messaging, content sharing, and user engagement features. Supports both web and mobile platforms with offline capabilities and push notifications.',
    technologies: ['Ionic', 'Angular', 'Firebase', 'Node.js', 'Socket.io'],
    type: 'Mobile/Web App',
    featured: true // Set to true to feature this project
  },
  {
    name: 'Enterprise CRM System',
    description: 'Company-wide customer relationship management system with contact management, sales pipeline tracking, reporting, and analytics. Features include automated workflows, email integration, and customizable dashboards.',
    technologies: ['.NET Core', 'Angular', 'SQL Server', 'Entity Framework', 'Azure'],
    type: 'Enterprise Application',
    featured: true // Set to true to feature this project
  },
  {
    name: 'ΔΕΗ Data Reporting Portal',
    description: 'Real-time data reporting and monitoring portal for Public Power Corporation managers across hydroelectric stations. Includes performance metrics, operational data visualization, alerts system, and automated report generation.',
    technologies: ['.NET Core', 'Angular', 'SignalR', 'SQL Server', 'D3.js'],
    type: 'Enterprise Dashboard',
    featured: false // Set to false for additional projects not shown prominently
  },
  {
    name: 'Self-Service Kiosk System',
    description: 'Interactive kiosk system deployed across multiple locations for customer self-service operations. Features touch-screen interface, payment processing, receipt printing, and real-time inventory management.',
    technologies: ['.NET', 'WPF', 'SQL Server', 'Windows Services'],
    type: 'Desktop Application',
    featured: false // Set to false for additional projects not shown prominently
  },
  {
    name: 'BoostedBoards Client Portal',
    description: 'Customer-facing web application for electric skateboard company BoostedBoards. Features product customization, order tracking, support system, and community features.',
    technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Stripe'],
    type: 'E-commerce Platform',
    featured: false // Set to false for additional projects not shown prominently
  }
];

// =============================================================================
// EDUCATION
// =============================================================================
// List your educational background in reverse chronological order
export const education: Education[] = [
  {
    institution: 'Hellenic Open University',
    degree: 'Computer Science',
    field: 'School of Science & Technology',
    period: 'Oct 2018',
    description: 'Studied core principles of computer science with emphasis on software development. Gained hands-on experience in web technologies, algorithms, and databases. Completed individual and team projects applying real-world programming skills.'
  },
  {
    institution: 'IEK, Larisa',
    degree: 'Computer Applications Technician',
    period: 'Oct 2014',
    description: 'Trained in practical aspects of software, hardware, and IT systems. Gained skills in application support, operating systems, and basic programming. Focused on real-world problem solving and end-user technology solutions.'
  }
];

// =============================================================================
// CONTACT INFORMATION
// =============================================================================
// Update your contact information and social media links here

export const contactInfo: ContactInfo = {
  phone: '+30-698-287-6947',
  email: 'contact@kmakris.gr',
  location: 'Athens, Greece',
  social: {
    github: 'https://github.com/kmakris23',
    linkedin: 'https://linkedin.com/in/kmakris',
    twitter: 'https://twitter.com/kmakris'
  }
};