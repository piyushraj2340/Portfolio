# Developer Portfolio Website

A professional portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** — designed to maximize interview opportunities with product-focused engineering teams.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Library | shadcn/ui |
| Deployment | Static Site Generation (SSG) |

## Architecture

The project follows a **feature-oriented architecture** with clear separation of concerns:

```text
src/
├── app/           # Routing only (App Router)
├── components/    # Reusable presentation components
├── features/      # Domain-specific feature modules
├── content/       # Static content data (TypeScript)
├── types/         # Shared domain type definitions
├── lib/           # Framework-agnostic helpers
├── config/        # Application configuration
├── hooks/         # Reusable React hooks
├── providers/     # Context providers
├── services/      # Data source abstractions
├── constants/     # Application constants
├── utils/         # Pure utility functions
├── styles/        # Global styling resources
├── layouts/       # Higher-order page layouts
└── assets/        # Bundled assets (images, icons, logos)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Lint the codebase
npm run lint
```

## Documentation

Detailed specifications are available in the `docs/` directory at the workspace root:

- **01 PRD.md** — Product Requirements Document
- **02 ARCHITECTURE.md** — Technical Architecture
- **03 Design System.md** — Design System Specification
- **04 Component Planning.md** — Component Inventory
- **05 Folder Structure.md** — Enterprise Folder Structure
- **06 UI Designer.md** — UI/UX Blueprint

## Design Principles

- Content-first, minimal, professional aesthetic
- Neutral-first color palette with a single primary accent
- 8-point spacing system with Geist Sans/Mono typography
- WCAG AA accessibility standards
- Mobile-first responsive design
- Respect for `prefers-reduced-motion` user preferences
