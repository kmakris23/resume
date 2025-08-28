import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './services/portfolio.service';
import { ThemeService } from './services/theme.service';
import { PersonalInfo, Experience, Skill, Project } from './models/portfolio.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('portfolio-website');
  
  // Component state
  mobileMenuOpen = false;
  currentYear = new Date().getFullYear();
  
  // Data
  personalInfo!: PersonalInfo;
  skills!: { backend: Skill[]; frontend: Skill[]; tools: Skill[] };
  experience!: Experience[];
  projects!: Project[];
  featuredProjects!: Project[];
  topSkills!: Skill[];

  constructor(
    private portfolioService: PortfolioService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    // Load personal info
    this.portfolioService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });

    // Load skills
    this.portfolioService.getSkills().subscribe(skillsData => {
      this.skills = skillsData;
      // Get top skills for the about section
      this.topSkills = [
        ...skillsData.backend.slice(0, 3),
        ...skillsData.frontend.slice(0, 3)
      ];
    });

    // Load experience
    this.portfolioService.getExperience().subscribe(exp => {
      this.experience = exp;
    });

    // Load projects
    this.portfolioService.getProjects().subscribe(allProjects => {
      this.projects = allProjects;
    });

    // Load featured projects
    this.portfolioService.getFeaturedProjects().subscribe(featured => {
      this.featuredProjects = featured;
    });
  }

  // UI Methods
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getLastNameInitial(fullName: string): string {
    const names = fullName.split(' ');
    return names.length > 1 ? names[names.length - 1].charAt(0) : '';
  }
}
