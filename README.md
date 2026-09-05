```markdown
# AI Chatbot SaaS Landing Page

A modern, high-converting landing page for an AI-powered customer support chatbot SaaS. Built with React 18, TypeScript 5, Vite 4, and Tailwind CSS 3. Features a dark theme with purple-blue gradients, glassmorphism UI, animated icons, and smooth scroll interactions.

## Tech Stack
- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel

## Design Features
- 🌑 Dark theme with radial purple-blue background gradients
- 🪟 Glassmorphism cards (`rgba(255,255,255,0.05)` background, backdrop blur)
- 🎨 Gradient borders that animate on hover
- 🎈 Floating animation for AI icons
- 📜 Smooth fade-in sections on scroll
- 📱 Fully responsive (mobile-first grid layouts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd ai-chatbot-saas-landing

# Install dependencies
npm install
```

### Development
```bash
# Start the Vite dev server (runs on http://localhost:3000)
npm run dev
```

### Build for Production
```bash
# Typecheck and build optimized assets to ./dist
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment to Vercel
This project is pre-configured for Vercel deployment.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the project in your Vercel dashboard.
3. Vercel will auto-detect Vite and use the `vercel.json` configuration for SPA routing.
4. Click **Deploy**.

## Project Structure
```
├── src/
│   ├── main.tsx          # React bootstrap
│   ├── index.css         # Tailwind directives & custom utilities
│   ├── App.tsx           # Main application component
│   └── components/       # UI components (Hero, Features, Pricing, etc.)
├── public/               # Static assets
├── index.html            # Entry HTML
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.ts        # Vite build configuration
├── vercel.json           # Vercel deployment config
└── README.md             # Documentation
```

## License
MIT
