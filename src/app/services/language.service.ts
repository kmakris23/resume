import { Injectable } from '@angular/core';
import { translations, Translations } from '../data/translations';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  // Always return English translations
  public t(): Translations {
    return translations;
  }
}