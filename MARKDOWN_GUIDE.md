# Portfolio Markdown Format Guide

This portfolio website now supports updating content from a simple markdown file (`PORTFOLIO.md`). This provides an easy way to update all portfolio information without needing to edit TypeScript files.

## Quick Start

1. Edit the `PORTFOLIO.md` file in the root directory
2. Commit and push your changes
3. The website will automatically load the updated content

## Markdown File Structure

The `PORTFOLIO.md` file should follow this structure:

### Personal Information Section
```markdown
## Personal Information

**Name:** Your Full Name
**Title:** Your Job Title
**Location:** Your City, Country
**Phone:** Your phone number
**Email:** your.email@example.com
**GitHub:** https://github.com/yourusername
**Years of Experience:** Number

**Bio:**
Your professional bio or description goes here.
```

### Skills Section
```markdown
## Skills

### Backend & Database
- C# (100%)
- .NET (100%)
- MySQL (95%)

### Frontend & Mobile
- JavaScript (100%)
- TypeScript (95%)
- Angular (90%)

### Tools & Cloud
- Git (100%)
- Docker (90%)
- Azure (85%)
```

**Note:** Skill proficiency should be a percentage from 0-100.

### Experience Section
```markdown
## Experience

### Job Title
**Company:** Company Name
**Location:** City, Country
**Period:** Year - Year (or Current)
**Technologies:** Tech1, Tech2, Tech3

- Achievement or responsibility 1
- Achievement or responsibility 2
- Achievement or responsibility 3
```

### Projects Section
```markdown
## Projects

### Project Name
**Type:** Web Application (or Mobile Application, Desktop Application, etc.)
**Technologies:** Angular, .NET Core, MySQL
**Featured:** Yes (or No)

Description of the project goes here. Explain what it does and its key features.
```

**Note:** Set `**Featured:** Yes` for projects you want to highlight on the main page.

### Education Section
```markdown
## Education

### Degree Name
**Institution:** University Name
**Field:** Field of Study (optional)
**Period:** Year - Year
**Grade:** Your grade or GPA (this becomes the description)
```

### Contact Section
```markdown
## Contact

**Email:** your.email@example.com
**Phone:** Your phone number
**Location:** Your City, Country
**GitHub:** https://github.com/yourusername
**LinkedIn:** https://linkedin.com/in/yourusername
**Twitter:** https://twitter.com/yourusername (optional)
```

## How It Works

1. **Fallback System**: The application first tries to load `PORTFOLIO.md`. If it fails, it falls back to the original TypeScript data files.

2. **Real-time Updates**: During development (`npm run dev`), changes to `PORTFOLIO.md` will be reflected immediately when you refresh the page.

3. **Build Process**: When building for production, the `PORTFOLIO.md` file is automatically copied to the `public` directory during the build process and served as a static asset.

## File Location

- **Development**: Place `PORTFOLIO.md` in the root directory
- **Production**: The file is automatically copied to the `public` directory during the build process

## Testing Your Changes

1. **Local Development**: 
   ```bash
   npm run dev
   ```
   Visit http://localhost:4200 to see your changes

2. **Production Build**:
   ```bash
   npm run build:prod
   ```
   Test the built application to ensure everything works correctly

## Benefits

- **Simple Editing**: No need to understand TypeScript syntax
- **Version Control**: Track changes easily with Git
- **Non-technical Friendly**: Anyone can update portfolio content
- **Flexible Structure**: Easy to add new sections or modify existing ones
- **Fallback Support**: Original TypeScript system remains as backup

## Important Notes

- Keep the markdown structure consistent for proper parsing
- Use the exact field names shown in the examples (case-sensitive)
- Percentages in skills must include the `%` symbol
- Featured projects should use `Yes` or `No` (case-insensitive)
- The bio and project descriptions support multiple paragraphs

## Troubleshooting

If content doesn't appear correctly:

1. Check the browser console for parsing errors
2. Verify the markdown structure matches the examples
3. Ensure all required fields are present
4. Test locally with `npm run dev` before deploying

The system will automatically fall back to TypeScript data if there are issues with the markdown file, ensuring the website always works.