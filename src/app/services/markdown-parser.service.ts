import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { marked } from 'marked';
import { 
  PersonalInfo, 
  Skill, 
  Experience, 
  Education, 
  Project, 
  ContactInfo 
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

  constructor(private http: HttpClient) {}

  parsePortfolioMarkdown(markdownContent: string): {
    personalInfo: PersonalInfo;
    skills: { backend: Skill[]; frontend: Skill[]; tools: Skill[] };
    experience: Experience[];
    education: Education[];
    projects: Project[];
    contactInfo: ContactInfo;
  } {
    const sections = this.parseMarkdownSections(markdownContent);
    
    return {
      personalInfo: this.parsePersonalInfo(sections['Personal Information'] || ''),
      skills: this.parseSkills(sections['Skills'] || ''),
      experience: this.parseExperience(sections['Experience'] || ''),
      education: this.parseEducation(sections['Education'] || ''),
      projects: this.parseProjects(sections['Projects'] || ''),
      contactInfo: this.parseContactInfo(sections['Contact'] || '')
    };
  }

  private parseMarkdownSections(markdown: string): Record<string, string> {
    const sections: Record<string, string> = {};
    const lines = markdown.split('\n');
    let currentSection = '';
    let currentContent: string[] = [];

    for (const line of lines) {
      if (line.startsWith('## ')) {
        if (currentSection && currentContent.length > 0) {
          sections[currentSection] = currentContent.join('\n').trim();
        }
        currentSection = line.replace('## ', '');
        currentContent = [];
      } else if (currentSection) {
        currentContent.push(line);
      }
    }

    if (currentSection && currentContent.length > 0) {
      sections[currentSection] = currentContent.join('\n').trim();
    }

    return sections;
  }

  private parsePersonalInfo(content: string): PersonalInfo {
    const lines = content.split('\n').filter(line => line.trim());
    const info: Partial<PersonalInfo> = {};
    let bio = '';
    let inBio = false;

    for (const line of lines) {
      if (line.startsWith('**Name:**')) {
        info.name = line.replace('**Name:**', '').trim();
      } else if (line.startsWith('**Title:**')) {
        info.title = line.replace('**Title:**', '').trim();
      } else if (line.startsWith('**Location:**')) {
        info.location = line.replace('**Location:**', '').trim();
      } else if (line.startsWith('**Phone:**')) {
        info.phone = line.replace('**Phone:**', '').trim();
      } else if (line.startsWith('**Email:**')) {
        info.email = line.replace('**Email:**', '').trim();
      } else if (line.startsWith('**GitHub:**')) {
        info.github = line.replace('**GitHub:**', '').trim();
      } else if (line.startsWith('**Years of Experience:**')) {
        info.yearsOfExperience = parseInt(line.replace('**Years of Experience:**', '').trim());
      } else if (line.startsWith('**Bio:**')) {
        inBio = true;
      } else if (inBio && line.trim()) {
        bio += (bio ? ' ' : '') + line.trim();
      }
    }

    info.bio = bio;

    return {
      name: info.name || '',
      title: info.title || '',
      location: info.location || '',
      phone: info.phone || '',
      email: info.email || '',
      bio: info.bio || '',
      github: info.github || '',
      yearsOfExperience: info.yearsOfExperience || 0
    };
  }

  private parseSkills(content: string): { backend: Skill[]; frontend: Skill[]; tools: Skill[] } {
    const skills = { backend: [] as Skill[], frontend: [] as Skill[], tools: [] as Skill[] };
    const lines = content.split('\n').filter(line => line.trim());
    let currentCategory = '';

    for (const line of lines) {
      if (line.startsWith('### ')) {
        const category = line.replace('### ', '').trim();
        if (category.includes('Backend') || category.includes('Database')) {
          currentCategory = 'backend';
        } else if (category.includes('Frontend') || category.includes('Mobile')) {
          currentCategory = 'frontend';
        } else if (category.includes('Tools') || category.includes('Cloud')) {
          currentCategory = 'tools';
        }
      } else if (line.startsWith('- ') && currentCategory) {
        const skillMatch = line.match(/- (.+?) \((\d+)%\)/);
        if (skillMatch) {
          const [, name, proficiency] = skillMatch;
          const skill: Skill = {
            name: name.trim(),
            proficiency: parseInt(proficiency),
            category: currentCategory
          };
          
          if (currentCategory === 'backend') {
            skills.backend.push(skill);
          } else if (currentCategory === 'frontend') {
            skills.frontend.push(skill);
          } else if (currentCategory === 'tools') {
            skills.tools.push(skill);
          }
        }
      }
    }

    return skills;
  }

  private parseExperience(content: string): Experience[] {
    const experiences: Experience[] = [];
    const sections = content.split('### ').filter(section => section.trim());

    for (const section of sections) {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) continue;

      const position = lines[0].trim();
      const experience: Partial<Experience> = { position };
      const achievements: string[] = [];

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('**Company:**')) {
          experience.company = line.replace('**Company:**', '').trim();
        } else if (line.startsWith('**Location:**')) {
          experience.location = line.replace('**Location:**', '').trim();
        } else if (line.startsWith('**Period:**')) {
          experience.period = line.replace('**Period:**', '').trim();
        } else if (line.startsWith('**Technologies:**')) {
          const techString = line.replace('**Technologies:**', '').trim();
          experience.technologies = techString.split(',').map(t => t.trim());
        } else if (line.startsWith('- ')) {
          achievements.push(line.replace('- ', '').trim());
        }
      }

      experience.achievements = achievements;

      experiences.push({
        company: experience.company || '',
        location: experience.location || '',
        position: experience.position || '',
        period: experience.period || '',
        achievements: experience.achievements || [],
        technologies: experience.technologies
      });
    }

    return experiences;
  }

  private parseEducation(content: string): Education[] {
    const educations: Education[] = [];
    const sections = content.split('### ').filter(section => section.trim());

    for (const section of sections) {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) continue;

      const degree = lines[0].trim();
      const education: Partial<Education> = { degree };
      let description = '';

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('**Institution:**')) {
          education.institution = line.replace('**Institution:**', '').trim();
        } else if (line.startsWith('**Field:**')) {
          education.field = line.replace('**Field:**', '').trim();
        } else if (line.startsWith('**Period:**')) {
          education.period = line.replace('**Period:**', '').trim();
        } else if (line.startsWith('**Grade:**')) {
          description = line.replace('**Grade:**', '').trim();
        }
      }

      educations.push({
        institution: education.institution || '',
        degree: education.degree || '',
        field: education.field,
        period: education.period || '',
        description: description
      });
    }

    return educations;
  }

  private parseProjects(content: string): Project[] {
    const projects: Project[] = [];
    const sections = content.split('### ').filter(section => section.trim());

    for (const section of sections) {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length === 0) continue;

      const name = lines[0].trim();
      const project: Partial<Project> = { name };
      let description = '';
      let inDescription = false;

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('**Type:**')) {
          project.type = line.replace('**Type:**', '').trim();
        } else if (line.startsWith('**Technologies:**')) {
          const techString = line.replace('**Technologies:**', '').trim();
          project.technologies = techString.split(',').map(t => t.trim());
        } else if (line.startsWith('**Featured:**')) {
          project.featured = line.replace('**Featured:**', '').trim().toLowerCase() === 'yes';
        } else if (!line.startsWith('**') && line.trim()) {
          if (!inDescription) {
            inDescription = true;
          }
          description += (description ? ' ' : '') + line.trim();
        }
      }

      project.description = description;

      projects.push({
        name: project.name || '',
        description: project.description || '',
        technologies: project.technologies || [],
        type: project.type || '',
        featured: project.featured || false
      });
    }

    return projects;
  }

  private parseContactInfo(content: string): ContactInfo {
    const lines = content.split('\n').filter(line => line.trim());
    const info: Partial<ContactInfo> = { social: {} };

    for (const line of lines) {
      if (line.startsWith('**Email:**')) {
        info.email = line.replace('**Email:**', '').trim();
      } else if (line.startsWith('**Phone:**')) {
        info.phone = line.replace('**Phone:**', '').trim();
      } else if (line.startsWith('**Location:**')) {
        info.location = line.replace('**Location:**', '').trim();
      } else if (line.startsWith('**GitHub:**')) {
        if (!info.social) info.social = {};
        info.social.github = line.replace('**GitHub:**', '').trim();
      } else if (line.startsWith('**LinkedIn:**')) {
        if (!info.social) info.social = {};
        info.social.linkedin = line.replace('**LinkedIn:**', '').trim();
      } else if (line.startsWith('**Twitter:**')) {
        if (!info.social) info.social = {};
        info.social.twitter = line.replace('**Twitter:**', '').trim();
      }
    }

    return {
      email: info.email || '',
      phone: info.phone || '',
      location: info.location || '',
      social: info.social || {}
    };
  }
}