import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  
  // Signal to track current theme
  public isDarkMode = signal(false);
  
  constructor() {
    this.initializeTheme();
  }
  
  private initializeTheme(): void {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    let isDark = false;
    
    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      // Use system preference
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    this.isDarkMode.set(isDark);
    this.applyTheme(isDark);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        // Only auto-update if user hasn't set a manual preference
        if (!localStorage.getItem(this.THEME_KEY)) {
          this.isDarkMode.set(e.matches);
          this.applyTheme(e.matches);
        }
      });
  }
  
  public toggleTheme(): void {
    const newTheme = !this.isDarkMode();
    this.isDarkMode.set(newTheme);
    this.applyTheme(newTheme);
    
    // Save preference
    localStorage.setItem(this.THEME_KEY, newTheme ? 'dark' : 'light');
  }
  
  private applyTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }
}