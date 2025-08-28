# Portfolio Content Update Guide

This guide will help you easily update your portfolio website content without needing to ask for help each time. All content is stored in structured data files that you can modify directly.

## Quick Start

1. **Make your changes** to the data files described below
2. **Test locally**: Run `npm run dev` to preview your changes at http://localhost:4200
3. **Build for production**: Run `npm run build:prod` to create the final website
4. **Deploy**: The built website will be in `dist/portfolio-website/browser/`

## Main Content File

All your portfolio content is stored in: **`src/app/data/portfolio.data.ts`**

This file is organized into clear sections with helpful comments to guide you.

## Content Sections

### 1. Personal Information
**Location**: `personalInfo` object at the top of the file

Update your:
- Name
- Job title
- Location  
- Phone number
- Email address
- Bio/description
- GitHub URL
- Years of experience

**Example**:
```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name Here',
  title: 'Your Job Title', 
  location: 'Your City, Country',
  phone: '+your-phone-number',
  email: 'your-email@example.com',
  // ... etc
};
```

### 2. Technical Skills  
**Location**: `skills` object

Organized in three categories:
- **Backend & Database**: Server-side technologies, databases
- **Frontend & Mobile**: Client-side technologies, mobile frameworks  
- **Tools & Cloud**: Development tools, cloud platforms

**How to update**:
- Add new skills: Insert new objects in the appropriate array
- Remove skills: Delete the entire skill object
- Update proficiency: Change the number (0-100 scale)

**Example**:
```typescript
frontend: [
  { name: 'JavaScript', proficiency: 100, category: 'frontend' },
  { name: 'Python', proficiency: 85, category: 'frontend' }, // New skill
  // ... more skills
],
```

### 3. Work Experience
**Location**: `experience` array

**Format**: List jobs in reverse chronological order (newest first)

Each job includes:
- Company name
- Location
- Position/title
- Time period
- List of achievements/responsibilities
- Technologies used

**To add a new job**: Copy an existing job object and modify the values, then place it at the beginning of the array.

**Example**:
```typescript
{
  company: 'New Company Name',
  location: 'City',  
  position: 'Your Position',
  period: '2023 - Current',
  achievements: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3'
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3']
},
```

### 4. Featured Projects
**Location**: `projects` array

Projects are displayed based on the `featured: true/false` setting.

**Featured projects** (featured: true): Shown prominently on the main page
**Other projects** (featured: false): Available but not highlighted

**To feature a project**: Set `featured: true`
**To add a new project**: Copy an existing project object and modify all fields

**Example**:
```typescript
{
  name: 'Your Project Name',
  description: 'Detailed description of what the project does...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  type: 'Web Application', // or 'Mobile App', 'Desktop App', etc.
  featured: true // Set to true to feature this project
},
```

### 5. Education
**Location**: `education` array

List your educational background in reverse chronological order.

### 6. Contact Information  
**Location**: `contactInfo` object

Update your contact details and social media links.

## Advanced Customization

### Adding New Skill Categories
If you want to add a fourth skill category:
1. Add it to the `skills` object structure
2. Update the template in `src/app/app.html` to display it

### Adding Project Images
Projects support optional images:
```typescript
{
  name: 'Project Name',
  description: '...',
  image: 'path/to/image.jpg', // Optional
  liveUrl: 'https://project-demo.com', // Optional  
  githubUrl: 'https://github.com/user/project', // Optional
  // ... other fields
}
```

### Changing Text Labels
Static text labels (like section headings) are in: `src/app/data/translations.ts`

## Building and Testing

### Local Development
```bash
npm install          # Install dependencies (first time only)
npm run dev         # Start development server
```
Visit http://localhost:4200 to see your changes.

### Production Build  
```bash
npm run build:prod  # Build optimized version
```
The built website will be in `dist/portfolio-website/browser/`

### Testing Your Changes
1. Start the dev server with `npm run dev`
2. Check each section of the website:
   - Hero section (personal info, bio)
   - About section (years of experience, top skills)
   - Skills section (all three categories)
   - Experience section (job history)  
   - Projects section (featured projects)
   - Contact section (contact info)

## Common Tasks

### Add a New Job
1. Copy an existing job object from the `experience` array
2. Place it at the beginning of the array (most recent first)
3. Update all fields: company, location, position, period, achievements, technologies

### Update Skills
1. Find the appropriate category (backend, frontend, tools)
2. Add/remove skills or update proficiency numbers
3. The top 6 skills (3 backend + 3 frontend) automatically appear in the About section

### Feature a Different Project  
1. Find the project in the `projects` array
2. Set `featured: true` for projects you want to highlight
3. Set `featured: false` for projects you want to de-emphasize

### Update Contact Information
1. Modify the `contactInfo` object
2. Update social media URLs in the `social` section

## Need Help?

If you run into issues:

1. **Build errors**: Check that all objects have proper syntax (commas, quotes, brackets)
2. **Content not showing**: Make sure you're editing the right file and saved your changes
3. **Layout issues**: Test your changes with `npm run dev` before building for production

The website uses TypeScript, so you'll get helpful error messages if something is wrong with the data format.

## File Structure Reference

```
src/app/data/
├── portfolio.data.ts    # 👈 Main content file (edit this!)
├── translations.ts      # UI text labels  
└── ...

src/app/
├── app.html            # Website layout template
├── app.ts              # Main component logic
└── ...
```

Focus on `portfolio.data.ts` for content updates. The other files control how the content is displayed.