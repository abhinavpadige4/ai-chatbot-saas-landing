# AI ChatBot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product. Built with React 18, TypeScript, Tailwind CSS, Vite, and Framer Motion for smooth animations.

## Features

- **Hero Section**: Compelling headline with primary and secondary CTAs
- **Features Section**: Animated cards highlighting 24/7 availability, multi-language support, smart responses, and analytics
- **Pricing Section**: Clear tiered pricing (Starter, Pro, Enterprise) with feature comparisons
- **Testimonials**: Social proof from satisfied customers
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Navigation links, social media icons, and copyright
- **Dark Theme**: Purple-blue gradient accents with glassmorphism effects
- **Animations**: Floating icons, pulse effects, and scroll-triggered fade-ins using Framer Motion

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
   cd ai-chatbot-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment to Vercel.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy your site

## Design System

### Colors

- Primary Gradient: `from-[#6366f1] to-[#8b5cf6]` (Indigo to Violet)
- Accent Gradient: `from-[#4f46e5] to-[#7c3aed]` (Darker Indigo to Purple)
- Glassmorphism: `bg-[rgba(30,30,46,0.7)] backdrop-blur-sm border border-[rgba(148,163,184,0.2)]`
- Text: `text-white` with `text-[rgba(255,255,255,0.8)]` for secondary text

### Components

All components use:
- Functional components with TypeScript
- Framer Motion for animations (`motion.div`, `variants`)
- Tailwind CSS for styling
- Glassmorphism cards with 1px border
- Animated icons with float and pulse effects
- Smooth fade-in sections on scroll

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

### Changing Content

Edit the content in each component file:
- `Hero.tsx`: Headline, subtitle, CTA buttons
- `Features.tsx`: Feature cards (icon, title, description)
- `Pricing.tsx`: Pricing tiers and features
- `Testimonials.tsx`: Customer quotes and names
- `FAQ.tsx`: Questions and answers
- `Footer.tsx`: Logo, nav links, social icons, copyright

### Changing Colors

Modify the gradient colors in Tailwind classes:
- Look for `from-[#6366f1] to-[#8b5cf6]` and similar patterns
- Update the hex values to match your brand

### Adding Animations

Framer Motion variants are defined in each component:
- `floatAnimation`: For gently floating icons
- `pulseAnimation`: For subtle pulsing effects
- `fadeIn`: For section entrance animations
- Adjust duration, delay, and easing as needed

## License

MIT

## Acknowledgments

- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Vite for fast development experience
- Vercel for seamless deployment
- React 18 team for the latest React features
- TypeScript team for type safety
- All contributors to the open-source ecosystem

--- 

Built with ❤️ for developers who want to launch beautiful SaaS landing pages quickly.