# GitHub Copilot Instructions for Kostas Makris Portfolio Repository

## Repository Overview

This repository contains a modern, responsive portfolio website for Kostas Makris, a Full Stack Developer with 8+ years of experience based in Athens, Greece. The website showcases professional experience, technical skills, and projects in an elegant, user-friendly interface.

**Repository Size:** ~650 npm packages, ~337KB production bundle  
**Project Type:** Single-page Angular application with static deployment  
**Languages:** TypeScript, HTML, SCSS, JavaScript  
**Framework:** Angular 20.2.0 (latest)  
**Styling:** TailwindCSS 3.4.17  
**Target Runtime:** Modern web browsers, optimized for static hosting  

## Build and Validation Instructions

### Prerequisites
- **Node.js:** Version 20+ (tested with v20.19.4)
- **npm:** Version 10+ (tested with v10.8.2)

### Bootstrap/Setup
```bash
cd portfolio-website
npm install
```
**Time Required:** ~8 seconds  
**Preconditions:** Node.js and npm installed  
**Postconditions:** All dependencies installed, ready for development

### Development Server
```bash
npm run dev
```
**Alternative:** `npm start` (without auto-open)  
**Time Required:** ~4 seconds to start  
**Access:** http://localhost:4200/  
**Preconditions:** Dependencies must be installed  
**Notes:** Uses Angular dev server with hot reload

### Build Commands

#### Development Build
```bash
npm run build
```
**Time Required:** ~5-6 seconds  
**Output:** `dist/portfolio-website/`  

#### Production Build
```bash
npm run build:prod
```
**Alternative:** `npm run build -- --configuration production`  
**Time Required:** ~5-6 seconds  
**Output:** `dist/portfolio-website/browser/` (optimized for deployment)  
**Bundle Size:** ~337KB total (84KB gzipped)

### Testing
```bash
npm test -- --watch=false --browsers=ChromeHeadless
```
**Time Required:** ~15-20 seconds  
**Known Issue:** One test fails due to title mismatch ("Kostas Makris" vs "Hello, portfolio-website")  
**Workaround:** This is a template test that needs updating but doesn't affect functionality  

### Linting
**Status:** No linting configuration present  
**Command:** `npm run lint` exists in package.json but fails  
**Note:** ESLint/TSLint not configured - manual code review required

### Validation Steps
1. Always run `npm install` before building
2. Build for production before deployment: `npm run build:prod`
3. Test application locally: `npm run dev` and visit http://localhost:4200
4. Verify build output exists in `dist/portfolio-website/browser/`
5. Check bundle size doesn't exceed budget limits (500KB warning, 1MB error)

## Project Layout and Architecture

### High-Level Structure
```
/
├── .github/workflows/deploy.yml    # GitHub Actions CI/CD
├── portfolio-website/              # Main Angular application
├── DEPLOYMENT.md                   # Deployment guide
└── README.md                       # Basic repository info
```

### Angular Application Structure
```
portfolio-website/
├── src/app/
│   ├── app.ts                     # Main app component
│   ├── app.html                   # App template
│   ├── app.scss                   # App styles
│   ├── app.config.ts              # Application configuration
│   ├── app.routes.ts              # Routing configuration
│   ├── data/portfolio.data.ts     # Portfolio content data
│   ├── models/portfolio.models.ts # TypeScript interfaces
│   └── services/portfolio.service.ts # Data services
├── src/
│   ├── main.ts                    # Application bootstrap
│   ├── index.html                 # HTML shell
│   └── styles.scss                # Global styles
├── public/                        # Static assets
├── angular.json                   # Angular CLI configuration
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # TailwindCSS configuration
└── tsconfig.json                  # TypeScript configuration
```

### Key Configuration Files
- **angular.json:** Angular CLI project configuration, build targets, test setup
- **tailwind.config.js:** Custom color scheme, fonts (Inter, Poppins, JetBrains Mono), animations
- **tsconfig.json:** TypeScript compiler options, strict mode enabled
- **package.json:** Project metadata, npm scripts, dependencies

### CI/CD Pipeline
**File:** `.github/workflows/deploy.yml`  
**Trigger:** Push to `main` branch or manual dispatch  
**Process:**
1. Checkout code
2. Setup Node.js 20 with npm cache
3. Install dependencies (`npm ci`)
4. Build with base-href for GitHub Pages (`npm run build -- --base-href /resume/`)
5. Deploy to GitHub Pages via artifacts

**Runtime:** ~2-3 minutes total  
**Deploy URL:** GitHub Pages at `/resume/` path

### Architecture Patterns
- **Standalone Components:** Angular standalone architecture (no NgModules)
- **Service-Based Data:** Portfolio content managed via `PortfolioService`
- **Static Data:** All content defined in TypeScript data files, no external APIs
- **Responsive Design:** TailwindCSS utility-first approach
- **Single Page Application:** No routing, all content in single app component

### Dependencies
**Production:**
- @angular/core, @angular/common, @angular/forms: ^20.2.0
- rxjs: ~7.8.0
- zone.js: ~0.15.0

**Development:**
- @angular/cli, @angular/build: ^20.2.0
- tailwindcss: ^3.4.17
- typescript: ~5.9.2
- karma, jasmine: Testing framework

## Content Management
**Location:** `src/app/data/portfolio.data.ts`  
**Update Process:** Modify data file and rebuild application  
**Content Types:** Personal info, skills, experience, projects, education  

## Common Issues and Workarounds

### Test Failure
**Issue:** Default test expects "Hello, portfolio-website" but app shows "Kostas Makris"  
**Workaround:** Known template test issue, does not affect functionality

### Linting
**Issue:** No linting configuration present  
**Workaround:** Manual code review required, follow Angular style guide

### Build Performance
**Issue:** Prebundling disabled warning during dev server  
**Workaround:** Expected behavior, does not affect functionality

### GitHub Pages Deployment
**Important:** Always use `--base-href /resume/` for GitHub Pages builds  
**Command:** `npm run build -- --base-href /resume/`

## File Organization
- **Components:** Single app component in `app.ts`
- **Services:** Data services in `services/` directory
- **Models:** TypeScript interfaces in `models/` directory  
- **Data:** Content data in `data/` directory
- **Assets:** Static files in `public/` directory
- **Styles:** Global SCSS in `src/styles.scss`, TailwindCSS utilities

## Key Source Files

### Main Application (`src/app/app.ts`)
- Standalone Angular component
- Imports: CommonModule, FormsModule
- Loads all portfolio data via PortfolioService
- Single-file component architecture

### Portfolio Data (`src/app/data/portfolio.data.ts`)
- Contains all website content as TypeScript objects
- Personal information, skills, experience, projects
- Easily modifiable for content updates

### TailwindCSS Config (`tailwind.config.js`)
- Custom color scheme (primary blues, grays)
- Custom fonts: Poppins (headings), Inter (body), JetBrains Mono (code)
- Custom animations: fade-in, slide-in, bounce-gentle

## Instructions for Coding Agents

**Trust these instructions** - all commands have been validated and work correctly. Only search for additional information if these instructions are incomplete or found to be incorrect.

**Always:**
1. Work from the `portfolio-website/` directory for all npm commands
2. Run `npm install` before any build operations
3. Use production build (`npm run build:prod`) for deployment verification
4. Test locally with `npm run dev` before finalizing changes
5. Respect the existing single-component architecture
6. Follow TailwindCSS utility-first approach for styling

**When making changes:**
1. Modify content in `src/app/data/portfolio.data.ts` for content updates
2. Update `src/app/app.ts` for functionality changes
3. Modify `tailwind.config.js` for styling customization
4. Test with `npm run dev` after changes
5. Build for production to verify no errors: `npm run build:prod`