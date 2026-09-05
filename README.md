```markdown
# AI Chatbot SaaS Landing Page

A modern, dark-themed landing page for an AI-powered customer support chatbot SaaS product. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🤖 **AI-Powered Hero Section** - Eye-catching headline with gradient text and animated elements
- ✨ **Feature Cards** - Glassmorphism cards showcasing 24/7 availability, multi-language support, smart responses, and analytics
- 💰 **Pricing Section** - Three-tier pricing (Starter $29, Pro $79, Enterprise) with highlighted Pro plan
- 💬 **Testimonials** - Customer testimonials with avatars and quotes
- ❓ **FAQ Accordion** - Expandable frequently asked questions
- 🦶 **Footer** - Links, social media, and newsletter signup

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Build Tool**: Vite
- **Deployment**: Vercel

## Design

- **Theme**: Dark mode with purple-blue gradients
- **Colors**: Primary purple (#a855f7) and blue (#3b82f6)
- **Style**: Glassmorphism cards with blur effects, gradient accents, floating animations
- **Typography**: Inter font family

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-chatbot-saas-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
├── vercel.json
└── README.md
```

## Deployment

### Vercel

The project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically deploy.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The build output is in the `dist` directory and can be deployed to any static hosting service.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: { /* purple shades */ },
  accent: {
    purple: '#a855f7',
    blue: '#3b82f6',
  },
}
```

### Fonts

The project uses Inter font. To change fonts, update `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## License

MIT
