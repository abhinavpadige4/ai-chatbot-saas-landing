# AI Chatbot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product. Built with React 18, TypeScript, Tailwind CSS, Vite, and Framer Motion for smooth animations.

## Features

- **Hero Section**: Compelling headline with primary and secondary CTAs
- **Features Section**: Animated cards highlighting 24/7 availability, multi-language support, smart responses, and analytics
- **Pricing Section**: Clear tiered pricing (Starter, Pro, Enterprise)
- **Testimonials**: Social proof from satisfied customers
- **FAQ**: Common questions about AI learning, integrations, and security
- **Footer**: Navigation, social links, and copyright
- **Design**: Dark theme with purple-blue gradients, glassmorphism cards, animated icons, and scroll-triggered fade-ins

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

```bash
npm run build
# or
yarn build
```

The production build will be in the `dist` directory.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration and deploy your site

## Design Details

- **Color Palette**: 
  - Primary: #6366f1 (Indigo)
  - Accents: Purple-blue gradients
  - Dark Background: #0f172a (Slate 900)
  - Card Background: rgba(15, 23, 42, 0.6) with glassmorphism effect
- **Typography**: Clean, modern sans-serif (system font stack)
- **Animations**: 
  - Floating and pulsing icons using Framer Motion
  - Fade-in sections on scroll
  - Smooth transitions on hover states
- **Component Structure**: 
  - All components are functional with TypeScript interfaces
  - Self-contained and reusable
  - Fully typed props and state

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
└── index.css
```

## Customization

- Update content in each component file
- Modify colors in `tailwind.config.js` if needed
- Adjust animation variants in Framer Motion components
- Add your logo in the Footer component

## License

MIT

© 2026 AIChatBot SaaS. All rights reserved.