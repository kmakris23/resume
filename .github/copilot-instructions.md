# GitHub Copilot Instructions for Kostas Makris Portfolio Repository

## Repository Overview

This repository contains a modern, responsive portfolio website for Kostas Makris, a Full Stack Developer with 8+ years of experience based in Athens, Greece. The website showcases professional experience, technical skills, and projects in an elegant, user-friendly interface. The portfolio supports easy content updates through a simple markdown file (`PORTFOLIO.md`) with fallback to TypeScript data files.

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
**Note:** Automatically copies `PORTFOLIO.md` to `public/` directory for production serving

#### Manual Portfolio Copy
```bash
npm run copy-portfolio
```
**Description:** Manually copy `PORTFOLIO.md` to `public/portfolio.md` if needed  
**Script Location:** `scripts/copy-portfolio.sh`

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
6. Ensure `PORTFOLIO.md` is copied to `public/` directory during build process

## Project Layout and Architecture

### High-Level Structure
```
/
├── .github/workflows/deploy.yml    # GitHub Actions CI/CD
├── PORTFOLIO.md                   # Markdown-based portfolio content
├── MARKDOWN_GUIDE.md               # Guide for updating content via markdown
├── DEPLOYMENT.md                   # Deployment guide
├── README.md                       # Basic repository info
└── [Angular application files]     # TypeScript, HTML, SCSS files
```

### Angular Application Structure
```
/
├── src/app/
│   ├── app.ts                      # Main app component
│   ├── app.html                    # App template
│   ├── app.scss                    # App styles
│   ├── app.config.ts               # Application configuration (includes HttpClient)
│   ├── app.routes.ts               # Routing configuration
│   ├── data/portfolio.data.ts      # TypeScript fallback data
│   ├── models/portfolio.models.ts  # TypeScript interfaces
│   └── services/
│       ├── portfolio.service.ts    # Data loading service (markdown + fallback)
│       ├── markdown-parser.service.ts # Markdown parsing service
│       ├── theme.service.ts        # Theme management
│       └── language.service.ts     # Language support
├── src/
│   ├── main.ts                     # Application bootstrap
│   ├── index.html                  # HTML shell
│   └── styles.scss                 # Global styles
├── public/                         # Static assets (includes copied PORTFOLIO.md as portfolio.md)
├── PORTFOLIO.md                    # Main content file (markdown format)
├── MARKDOWN_GUIDE.md               # Content editing guide
├── angular.json                    # Angular CLI configuration
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # TailwindCSS configuration
└── tsconfig.json                   # TypeScript configuration
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
- **Service-Based Data:** Portfolio content managed via `PortfolioService` with `MarkdownParserService`
- **Markdown-First Content:** All content primarily loaded from `PORTFOLIO.md` with TypeScript fallback
- **HTTP Client Integration:** Uses Angular HttpClient to load markdown files
- **Responsive Design:** TailwindCSS utility-first approach
- **Single Page Application:** No routing, all content in single app component

### Dependencies
**Production:**
- @angular/core, @angular/common, @angular/forms: ^20.2.0
- rxjs: ~7.8.0
- zone.js: ~0.15.0
- marked: For markdown parsing

**Development:**
- @angular/cli, @angular/build: ^20.2.0
- tailwindcss: ^3.4.17
- typescript: ~5.9.2
- karma, jasmine: Testing framework

## Content Management

### Primary Method: Markdown File
**Location:** `PORTFOLIO.md` (root directory)  
**Update Process:** Edit markdown file and rebuild application  
**Content Types:** Personal info, skills, experience, projects, education  
**Format Guide:** See `MARKDOWN_GUIDE.md` for detailed syntax  

### Fallback Method: TypeScript Data
**Location:** `src/app/data/portfolio.data.ts`  
**Usage:** Automatic fallback if markdown file fails to load  
**Update Process:** Modify data file and rebuild application  

### Content Loading System
- **Primary:** Attempts to load `PORTFOLIO.md` via HTTP request
- **Fallback:** Uses TypeScript data objects if markdown fails
- **Parser:** `MarkdownParserService` converts markdown to TypeScript interfaces
- **Service:** `PortfolioService` manages loading and fallback logic  

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

### Markdown Content Loading
**Issue:** Portfolio content may not load if markdown file is malformed or missing  
**Workaround:** System automatically falls back to TypeScript data in `src/app/data/portfolio.data.ts`  
**Debug:** Check browser console for markdown parsing errors and refer to `MARKDOWN_GUIDE.md`

## File Organization
- **Components:** Single app component in `app.ts`
- **Services:** Data services in `services/` directory (portfolio, markdown-parser, theme, language)
- **Models:** TypeScript interfaces in `models/` directory  
- **Data:** Fallback content data in `data/` directory
- **Content:** Primary content in `PORTFOLIO.md` (root directory)
- **Assets:** Static files in `public/` directory
- **Documentation:** `MARKDOWN_GUIDE.md` for content editing
- **Styles:** Global SCSS in `src/styles.scss`, TailwindCSS utilities

## Key Source Files

### Main Application (`src/app/app.ts`)
- Standalone Angular component
- Imports: CommonModule, FormsModule
- Loads all portfolio data via PortfolioService (markdown + fallback)
- Single-file component architecture

### Portfolio Service (`src/app/services/portfolio.service.ts`)
- Loads content from markdown file first, falls back to TypeScript data
- Uses HttpClient to fetch `portfolio.md` (served from copied PORTFOLIO.md)
- Integrates with MarkdownParserService for content parsing
- Provides unified data interface regardless of source

### Markdown Parser Service (`src/app/services/markdown-parser.service.ts`)
- Parses `PORTFOLIO.md` content into TypeScript interfaces
- Handles personal info, skills, experience, projects, education sections
- Uses marked library for markdown processing
- Converts markdown structure to portfolio data models

### Portfolio Data (`src/app/data/portfolio.data.ts`)
- Contains fallback website content as TypeScript objects
- Used when markdown file fails to load or parse
- Personal information, skills, experience, projects
- Backup system ensuring website always works

### TailwindCSS Config (`tailwind.config.js`)
- Custom color scheme (primary blues, grays)
- Custom fonts: Poppins (headings), Inter (body), JetBrains Mono (code)
- Custom animations: fade-in, slide-in, bounce-gentle

## Instructions for Coding Agents

**Trust these instructions** - all commands have been validated and work correctly. Only search for additional information if these instructions are incomplete or found to be incorrect.

**Always:**
1. Run `npm install` before any build operations
2. Use production build (`npm run build:prod`) for deployment verification
3. Test locally with `npm run dev` before finalizing changes
4. Respect the existing single-component architecture
5. Follow TailwindCSS utility-first approach for styling
6. Ensure `PORTFOLIO.md` exists and is properly formatted for content updates

**When making changes:**
1. **Content Updates:** Edit `PORTFOLIO.md` using markdown syntax (see `MARKDOWN_GUIDE.md`)
2. **Functionality Changes:** Update `src/app/app.ts` for component logic
3. **Service Changes:** Modify services in `src/app/services/` directory
4. **Styling Changes:** Modify `tailwind.config.js` for customization
5. **Testing:** Test with `npm run dev` after changes
6. **Production Build:** Verify with `npm run build:prod` before deployment
7. **Fallback Data:** Update `src/app/data/portfolio.data.ts` if TypeScript fallback needs changes