import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(personalInfo);
  }

  getSkills(): Observable<{ backend: Skill[]; frontend: Skill[]; tools: Skill[] }> {
    return of(skills);
  }

  getExperience(): Observable<Experience[]> {
    return of(experience);
  }

  getEducation(): Observable<Education[]> {
    return of(education);
  }

  getProjects(featuredOnly: boolean = false): Observable<Project[]> {
    const filteredProjects = featuredOnly ? projects.filter(p => p.featured) : projects;
    return of(filteredProjects);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(contactInfo);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects(true);
  }

  getAllSkills(): Observable<Skill[]> {
    const allSkills = [
      ...skills.backend,
      ...skills.frontend,
      ...skills.tools
    ];
    return of(allSkills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    const allSkills = [
      ...skills.backend,
      ...skills.frontend,
      ...skills.tools
    ];
    return of(allSkills.filter(skill => skill.category === category));
  }
}