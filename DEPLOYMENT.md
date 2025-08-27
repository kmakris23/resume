# Deployment Guide

This guide explains how to deploy the Kostas Makris portfolio website to various hosting platforms.

## Quick Start

1. **Build the project**
   ```bash
   cd portfolio-website
   npm install
   npm run build
   ```

2. **The build output will be in `portfolio-website/dist/portfolio-website/`**

## Hosting Platforms

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '20'
    - name: Install and Build
      run: |
        cd portfolio-website
        npm ci
        npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./portfolio-website/dist/portfolio-website
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Base directory: `portfolio-website`
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio-website`

### Vercel

1. Connect your GitHub repository to Vercel
2. Set framework preset to "Angular"
3. Set root directory to `portfolio-website`
4. Build command: `npm run build`
5. Output directory: `dist/portfolio-website`

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