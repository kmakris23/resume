# Kostas Makris Portfolio Website

A modern, responsive portfolio website built with Angular and TailwindCSS showcasing the professional experience, skills, and projects of Kostas Makris, a Full Stack Developer based in Athens, Greece.

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Single Page Application** - Fast navigation with smooth scrolling
- **Contact Form** - Integrated contact form for inquiries
- **Portfolio Showcase** - Detailed project presentations
- **Skills Visualization** - Interactive skill level indicators
- **Professional Timeline** - Work experience timeline
- **SEO Optimized** - Meta tags and structured data

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 20 (latest)
- **Styling**: TailwindCSS 3.4
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Font**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kmakris23/resume.git
   cd resume/portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run linting
- `npm run serve` - Serve built application locally

### Project Structure

```
src/
├── app/
│   ├── components/        # Reusable components (future)
│   ├── services/         # Data services
│   ├── models/           # TypeScript interfaces
│   ├── data/            # Static data files
│   ├── app.ts           # Main app component
│   ├── app.html         # Main app template
│   └── app.scss         # Main app styles
├── assets/              # Static assets
├── styles/              # Global styles
└── index.html          # Entry HTML file
```

## 📝 Content Management

The website content is managed through TypeScript data files located in `src/app/data/`:

- **Personal Information**: Contact details, bio, social links
- **Experience**: Work history with achievements and technologies
- **Skills**: Technical skills with proficiency levels
- **Projects**: Portfolio projects with descriptions and tech stacks
- **Education**: Academic background and certifications

To update content, modify the corresponding data files and rebuild the application.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue shades for main branding
- **Gray**: Various gray tones for text and backgrounds

### Typography
- **Headings**: Poppins font family
- **Body Text**: Inter font family
- **Code**: JetBrains Mono font family

### Layout
- **Container**: Max width 7xl with responsive margins
- **Sections**: Consistent padding using `section-padding` class
- **Cards**: Unified card design with hover effects

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/portfolio-website` folder to:**
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting
   - AWS S3 + CloudFront

## 📱 Features by Section

### Hero Section
- Professional introduction
- Call-to-action buttons
- Social media links
- Animated elements

### About Section
- Detailed bio
- Experience highlights
- Key statistics
- Top skills showcase

### Skills Section
- Visual skill bars
- Categorized technologies
- Proficiency levels
- Interactive elements

### Experience Section
- Timeline layout
- Company details
- Achievement lists
- Technology tags

### Portfolio Section
- Project cards
- Technology filters
- Detailed descriptions
- Project categorization

### Contact Section
- Contact information
- Interactive form
- Form validation
- Success messaging

## 🔗 Links

- **Original Website**: [https://kmakris.gr](https://kmakris.gr)
- **GitHub Repository**: [https://github.com/kmakris23/resume](https://github.com/kmakris23/resume)
- **LinkedIn**: [https://linkedin.com/in/kmakris](https://linkedin.com/in/kmakris)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Kostas Makris**
- Full Stack Developer
- Location: Athens, Greece
- Email: contact@kmakris.gr
- GitHub: [@kmakris23](https://github.com/kmakris23)

---

*Built with ❤️ using Angular and TailwindCSS*