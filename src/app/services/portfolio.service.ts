import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { 
  PersonalInfo, 
  Skill, 
  Experience, 
  Education, 
  Project, 
  ContactInfo 
} from '../models/portfolio.models';
import { 
  personalInfo, 
  skills, 
  experience, 
  education, 
  projects, 
  contactInfo 
} from '../data/portfolio.data';
import { MarkdownParserService } from './markdown-parser.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: {
    personalInfo: PersonalInfo;
    skills: { backend: Skill[]; frontend: Skill[]; tools: Skill[] };
    experience: Experience[];
    education: Education[];
    projects: Project[];
    contactInfo: ContactInfo;
  } | null = null;

  constructor(
    private http: HttpClient,
    private markdownParser: MarkdownParserService
  ) {
    this.loadPortfolioData();
  }

  private loadPortfolioData(): void {
    // Try to load from markdown file first, fall back to TypeScript data
    this.http.get('/portfolio.md', { responseType: 'text' }).pipe(
      map(markdownContent => {
        return this.markdownParser.parsePortfolioMarkdown(markdownContent);
      }),
      catchError(error => {
        console.warn('Failed to load portfolio.md, falling back to TypeScript data:', error);
        // Return the existing TypeScript data as fallback
        return of({
          personalInfo,
          skills,
          experience,
          education,
          projects,
          contactInfo
        });
      })
    ).subscribe(data => {
      this.portfolioData = data;
    });
  }

  getPersonalInfo(): Observable<PersonalInfo> {
    if (this.portfolioData) {
      return of(this.portfolioData.personalInfo);
    }
    return of(personalInfo);
  }

  getSkills(): Observable<{ backend: Skill[]; frontend: Skill[]; tools: Skill[] }> {
    if (this.portfolioData) {
      return of(this.portfolioData.skills);
    }
    return of(skills);
  }

  getExperience(): Observable<Experience[]> {
    if (this.portfolioData) {
      return of(this.portfolioData.experience);
    }
    return of(experience);
  }

  getEducation(): Observable<Education[]> {
    if (this.portfolioData) {
      return of(this.portfolioData.education);
    }
    return of(education);
  }

  getProjects(featuredOnly: boolean = false): Observable<Project[]> {
    const projectList = this.portfolioData ? this.portfolioData.projects : projects;
    const filteredProjects = featuredOnly ? projectList.filter(p => p.featured) : projectList;
    return of(filteredProjects);
  }

  getContactInfo(): Observable<ContactInfo> {
    if (this.portfolioData) {
      return of(this.portfolioData.contactInfo);
    }
    return of(contactInfo);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects(true);
  }

  getAllSkills(): Observable<Skill[]> {
    return this.getSkills().pipe(
      map(skillsData => [
        ...skillsData.backend,
        ...skillsData.frontend,
        ...skillsData.tools
      ])
    );
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return this.getAllSkills().pipe(
      map(allSkills => allSkills.filter(skill => skill.category === category))
    );
  }
}