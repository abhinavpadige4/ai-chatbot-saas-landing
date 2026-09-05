# AI Chatbot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product. Features purple-blue gradients, glassmorphism design, animated icons, and smooth scroll animations.

## Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 4
- **Language**: TypeScript 5
- **Deployment**: Vercel

## Features

- Hero section with AI-Powered Customer Support headline
- Features section with 24/7 availability, multi-language, smart responses, and analytics
- Pricing section (Starter $29, Pro $79, Enterprise)
- Testimonials carousel
- FAQ section
- Responsive design
- Dark theme with purple-blue gradients
- Glassmorphism cards with animated borders
- Floating animated icons
- Smooth fade-in sections on scroll

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Deployment

This project is configured for easy deployment to Vercel. Simply push to a Git repository connected to Vercel, and it will automatically build and deploy.

## Design Details

- **Color Scheme**: Dark background (`#0f172a`) with purple-blue gradients (`#a855f7` to `#06b6d4`)
- **Glassmorphism**: Cards use `rgba(255,255,255,0.05)` background with backdrop blur
- **Animations**: 
  - Icons float gently using CSS keyframes
  - Cards lift on hover with gradient border animation
  - Sections fade in on scroll
- **Typography**: Inter font for clean, modern readability

## File Structure

```
src/
├── main.tsx          # React bootstrap
├── index.css         # Tailwind imports and custom CSS
├── App.tsx           # Main application component (generated separately)
└── components/       # Reusable components (Hero, Features, etc.)
```

## License

MIT

## Acknowledgments

- Inspired by modern SaaS landing page designs
- Built with ❤️ using React, Tailwind CSS, and Vite
- Deployed on Vercel for global performance and reliability
EOF