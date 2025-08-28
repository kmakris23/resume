import { Injectable, signal, computed } from '@angular/core';
import { translations, Translations } from '../data/translations';

export type Language = 'en' | 'gr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'portfolio-language';
  
  // Signal to track current language
  public currentLanguage = signal<Language>('en');
  
  // Computed signal for current translations
  public t = computed(() => translations[this.currentLanguage()]);
  
  constructor() {
    this.initializeLanguage();
  }
  
  private initializeLanguage(): void {
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as Language;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'gr')) {
      this.currentLanguage.set(savedLanguage);
    } else {
      // Default to English
      this.currentLanguage.set('en');
    }
  }
  
  public toggleLanguage(): void {
    const newLanguage: Language = this.currentLanguage() === 'en' ? 'gr' : 'en';
    this.currentLanguage.set(newLanguage);
    
    // Save preference
    localStorage.setItem(this.LANGUAGE_KEY, newLanguage);
  }
  
  public isGreek(): boolean {
    return this.currentLanguage() === 'gr';
  }
  
  public isEnglish(): boolean {
    return this.currentLanguage() === 'en';
  }
}