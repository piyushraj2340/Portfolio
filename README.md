# Developer Portfolio Website

A professional, dynamic portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **MongoDB** — designed to maximize interview opportunities with product-focused engineering teams.

## 🚀 Features

- **Dynamic Backend API**: A fully functional Node.js server route for processing contact forms.
- **Database Integration**: MongoDB connection pooling to safely store incoming messages.
- **Secure Email Notifications**: Integrated SMTP via Nodemailer with a beautifully formatted HTML template.
- **Enterprise-grade Validation**: Shared Zod schemas enforcing strict validation rules on both the frontend and backend.
- **Built-in Security**: In-memory IP rate limiting to prevent spam abuse.
- **Accessible Design**: WCAG AA compliant with keyboard navigation, semantic HTML, and ARIA roles.
- **Premium Aesthetics**: Glassmorphism, smooth Framer Motion micro-animations, and a highly polished neutral color palette.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 & Framer Motion |
| **Database** | MongoDB & Mongoose |
| **Validation** | Zod |
| **Mailing** | Nodemailer |

## 🏗️ Architecture

The project follows a modular, feature-oriented architecture with a strict separation of concerns, ensuring high maintainability and testability for enterprise environments.

```text
src/
├── app/                  # Next.js App Router (Pages & API Routes)
│   └── api/contact/      # Clean Controller mapping HTTP requests to Services
├── components/           # Reusable UI components & layouts
│   ├── sections/         # Complex page sections (Hero, Experience, Contact)
│   └── ui/               # Primitive shadcn-style components
├── lib/                  # Framework-agnostic backend infrastructure
│   ├── middleware/       # Edge-compatible security (Rate limiting, IP checks)
│   ├── services/         # Core business logic (Mongoose wrappers, Nodemailer dispatch)
│   ├── templates/        # Modular HTML generators for email dispatch
│   └── validations/      # Single Source of Truth for Zod schemas (Shared Full-Stack)
├── models/               # Mongoose Database Schemas (Document Object Mapping)
├── content/              # Static content configurations (TypeScript Data Layer)
├── types/                # Global domain type definitions & interfaces
├── hooks/                # Custom React Hooks
└── config/               # Application-wide configuration and tokens
```

## ⚙️ Environment Setup

To run this project locally, you need to configure your environment variables. Create a `.env` file in the root directory based on the following template:

```env
# Local MongoDB Connection String
MONGODB_URI="mongodb://localhost:27017/portfolio"

# SMTP Configuration (For sending emails)
# e.g., smtp.gmail.com with an App Password
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Notification Email (Where you want to receive form submissions)
CONTACT_EMAIL_TO="your-email@gmail.com"

# Form Validation Settings
NEXT_PUBLIC_MIN_NAME_LENGTH="2"
NEXT_PUBLIC_MAX_NAME_LENGTH="100"
NEXT_PUBLIC_MIN_MESSAGE_LENGTH="10"
NEXT_PUBLIC_MAX_MESSAGE_LENGTH="2000"

# API Rate Limiting Configuration
RATE_LIMIT_WINDOW_MS="3600000"
MAX_REQUESTS_PER_WINDOW="3"
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Ensure MongoDB is running locally** (or provide an Atlas URI in your `.env` file).

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## 🎨 Design & Engineering Principles

### Visual & UX Design
- **Premium Aesthetics**: Embraces modern web design patterns including subtle glassmorphism, dynamic gradients, and restrained border-radii.
- **Micro-Interactions**: Leverages Framer Motion for highly optimized, jank-free scroll reveals, hover states, and loading transitions.
- **Typography & Rhythm**: Utilizes a strict 8-point spacing grid paired with highly legible, modern typography for perfect vertical rhythm.
- **Accessibility (a11y)**: Built to strictly adhere to WCAG AA standards. Features full keyboard navigation, screen-reader optimized ARIA roles, semantic HTML landmarks (`<main>`, `<section>`, `role="list"`), and high-contrast text rendering. Honors `prefers-reduced-motion` settings automatically.

### Backend & Security
- **Defense in Depth**: API routes are protected by multi-layered validation (Zod) preventing payload injection, alongside custom IP-based rate limiting to prevent spam and DDoS attempts.
- **Environment-Driven Configuration**: Zero hardcoded secrets or arbitrary validation limits. All constraints (min/max lengths, rate limit windows, SMTP credentials) are injected securely via `.env`.
- **Controller-Service Pattern**: Backend endpoints act purely as HTTP controllers, immediately delegating business logic (Database Saves, Email Dispatch) to decoupled service modules.
