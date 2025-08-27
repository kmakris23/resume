# Deployment Guide

This guide explains how to deploy the Kostas Makris portfolio website to various hosting platforms.

## Quick Start

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **The build output will be in `dist/portfolio-website/browser/`**

## Hosting Platforms

## GitHub Pages Setup

### Automatic Deployment

1. Push your code to GitHub
2. Go to repository Settings > Pages  
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on every push to `main` branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured and will:
- Build the Angular application with the correct base href (`/resume/`)
- Deploy to GitHub Pages automatically
- Handle all necessary permissions and configurations

### Manual Deployment

If you prefer manual deployment, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: package-lock.json
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Install dependencies
        run: npm ci
          
      - name: Build
        run: npm run build -- --base-href /resume/
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/portfolio-website/browser

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio-website/browser`

### Vercel

1. Connect your GitHub repository to Vercel
2. Set framework preset to "Angular"
3. Build command: `npm run build`
4. Output directory: `dist/portfolio-website/browser`

## Domain Configuration

Once deployed, you can configure a custom domain (e.g., kmakris.gr) through your hosting provider's dashboard.

## Environment Variables

For production deployments, consider adding:

- `NODE_ENV=production`
- Any API keys for contact form backends
- Analytics tracking IDs

## Performance Optimization

The built application is already optimized with:
- Tree shaking
- Minification
- Gzip compression
- Lazy loading
- Modern JavaScript bundles

## SSL Certificate

Most hosting providers (GitHub Pages, Netlify, Vercel) provide free SSL certificates automatically.