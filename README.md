# AI Chatbot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product. Built with React 18, TypeScript, Tailwind CSS, Vite, and Framer Motion for smooth animations.

## Features

- **Hero Section**: Compelling headline with primary and secondary CTAs
- **Features Section**: Glassmorphism cards highlighting key capabilities
- **Pricing Section**: Clear tiered pricing (Starter, Pro, Enterprise)
- **Testimonials**: Social proof from satisfied customers
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Navigation, social links, and copyright
- **Dark Theme**: Purple-blue gradient accents with glassmorphism effects
- **Animations**: Floating icons, pulse effects, and scroll-triggered fade-ins using Framer Motion
- **Fully Responsive**: Optimized for all device sizes

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-chatbot-saas
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` directory.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy your site

## Design System

### Colors

- **Primary Gradient**: `from-[#6366f1] to-[#8b5cf6]` (Indigo to Violet)
- **Secondary Accent**: `from-[#4f46e5] to-[#7c3aed]`
- **Dark Background**: `#0f172a` (Slate 900)
- **Card Background**: `rgba(15, 23, 42, 0.6)` with glassmorphism effect
- **Border**: `1px solid rgba(148,163,184,0.2)` (Slate 400 at 20% opacity)
- **Text**: `text-white` with `text-gray-300` for secondary text

### Components

All components use:
- **Glassmorphism**: `bg-black/50 backdrop-blur-sm border border-white/10`
- **Hover Effects**: `hover:bg-black/60 transition-all duration-300`
- **Animated Icons**: Framer Motion `float` and `pulse` variants
- **Scroll Animations**: `whileInView` and `viewport` for fade-in effects

## File Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## Customization

### Changing Colors

Modify the gradient colors in Tailwind config or directly in components:
- Primary gradient: `from-[#6366f1] to-[#8b5cf6]`
- To change: Update the hex values in gradient classes

### Updating Content

Edit the content in each component file:
- Hero: Update headline, subtitle, and CTA text
- Features: Modify feature cards
- Pricing: Adjust plans and pricing
- Testimonials: Replace quotes and names
- FAQ: Update questions and answers
- Footer: Change links and social media

## License

MIT

## Acknowledgments

- Inspired by modern SaaS landing pages
- Built with love using React and Tailwind CSS
- Animations powered by Framer Motion
- Icons can be added from Heroicons or similar libraries

--- 

*Deployed with ❤️ on Vercel*