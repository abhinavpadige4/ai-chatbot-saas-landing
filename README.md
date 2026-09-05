# AI Chatbot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product.

## Features

- **Hero Section**: Eye-catching headline with gradient text and animated AI icon
- **Features Section**: Glassmorphism cards highlighting 24/7 availability, multi-language support, smart responses, and analytics
- **Pricing Section**: Three-tier pricing (Starter $29, Pro $79, Enterprise) with featured Pro plan
- **Testimonials**: Customer quotes with fade-in/fade-out animation
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Clean footer with links and social icons
- **Animations**: Floating icons, hover lifts, fade-in sections on scroll
- **Theme**: Dark mode with purple-blue gradients (#a855f7, #06b6d4)
- **Styling**: Tailwind CSS with glassmorphism effects

## Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 4
- **Language**: TypeScript 5
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Deployment to Vercel

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Vercel will automatically detect the build settings and deploy

## Design Details

- **Color Palette**:
  - Primary: `#a855f7` (purple)
  - Secondary: `#06b6d4` (cyan)
  - Accent: `#7c3aed` (violet)
  - Background: `#0f172a` (dark blue-gray)
  - Text: `#f8fafc` (light gray)

- **Glassmorphism Effects**:
  - Background: `rgba(255, 255, 255, 0.05)`
  - Border: `rgba(255, 255, 255, 0.1)`
  - Backdrop Blur: `blur(10px)`

- **Animations**:
  - Floating icons: Gentle up/down motion
  - Hover effects: Lift cards with enhanced shadow
  - Section transitions: Fade-in on scroll
  - Gradient borders: Animated on hover

## File Structure

```
src/
├── main.tsx          # React bootstrap
├── index.css         # Global styles and Tailwind imports
├── App.tsx           # Main app component (generated separately)
├── components/       # Reusable UI components
└── assets/           # Images, icons, etc.

config/
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── package.json
├── vercel.json
└── README.md
```

## Customization

### Changing Colors

Modify the CSS variables in `src/index.css`:
- `--primary-gradient`: Main gradient for text and borders
- `--secondary-gradient`: Alternative gradient for hover states
- `--glass-bg`: Glassmorphism background opacity
- `--glass-border`: Glassmorphism border opacity

### Adding Features

1. Create a new component in `src/components/`
2. Import and use it in `App.tsx`
3. Add corresponding styles in `src/index.css` if needed

## License

MIT

## Support

For support, please open an issue in the GitHub repository or contact the development team.
