# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production version  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run type-check` - TypeScript type checking without compilation

### Prerequisites
- Node.js 18+ and npm 9+
- Docker & Docker Compose (optional but recommended)

## Project Architecture

### Tech Stack
- **Frontend**: Next.js 15 with App Router, TypeScript (strict mode), Tailwind CSS v4
- **Styling**: Tailwind CSS with custom color palette (primary/secondary/error variants)
- **Animation**: Framer Motion for interactions
- **Icons**: Lucide React
- **Typography**: Inter font with CSS variables

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/homepage/` - Homepage-specific React components
- `/public/homepage/` - Static assets for homepage sections
- `/docs/` - Comprehensive project documentation
- `/pages/` - Legacy pages directory (minimal usage)

### Key Architectural Patterns
- **Component-Based**: All homepage sections are modular React components
- **TypeScript Strict**: Full type safety with strict mode enabled
- **Path Aliases**: `@/*` maps to `./src/*` for clean imports
- **CSS-in-JS**: Tailwind utility classes with custom theme extensions

### Styling Conventions
- Custom color system with 50-900 variants for primary, secondary, and error colors
- Custom animations: `fade-in` and `slide-up` with corresponding keyframes
- Typography utility plugin enabled via `@tailwindcss/typography`
- Font family uses CSS variable `--font-inter` for Inter font

### Component Organization
Homepage components follow a modular pattern:
- HeroTop.tsx - Main hero section
- Solutions*.tsx - Various solution displays
- InvestorsSection.tsx - Investor-focused content
- HomepageCTA.tsx - Call-to-action sections
- Impact/Metrics components for data visualization

### Development Environment
- ESLint configured with Next.js core web vitals
- TypeScript with bundler module resolution
- Image optimization configured for WebP/AVIF formats
- Incremental compilation enabled

## Code Quality Requirements
Always run `npm run lint` and `npm run type-check` before committing to ensure code quality and type safety. The project uses strict TypeScript settings and Next.js ESLint rules.