# MPIRSG - Mymensingh Polytechnic Institute Rover Scout Group

Modern, high-performance website built with React, TypeScript, and Tailwind CSS.

## ✨ New Features

### 🔐 Authentication System
- **Student Login** (`/student-login`) - Modern login page for rover scouts
- **Admin Login** (`/admin-login`) - Secure admin panel access
- Beautiful glassmorphism UI with loading states

### ⚡ Performance Optimizations
- **Lazy Loading** - All routes are code-split for faster initial load
- **Image Loading States** - Skeleton loaders for smooth image loading
- **Optimized Bundles** - Vendor chunks separated for better caching
- **Loading Indicators** - Visual feedback for all async operations

### 🎨 UI Improvements
- Enhanced navbar with login dropdown
- Smooth loading animations
- Better error handling for images
- Responsive design improvements

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open browser: http://localhost:5173

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      
│   ├── shared/      # ImageWithLoader, LoadingSpinner, etc.
│   └── ui/          # Reusable UI components
├── contexts/        # React contexts (Language)
├── data/           # Site data and translations
├── hooks/          # Custom React hooks
├── layout/         # Navbar and Footer
├── lib/            # Utility functions
├── pages/          # Page components (Home, About, Login, etc.)
└── sections/       # Section components
```

## 🎯 Quick Edit

### Change Text:
`src/data/translations.ts`

### Update Data (notices, stats, leaders):
`src/data/siteData.ts`

### Add Images:
`src/assets/`

### Customize Login Pages:
- `src/pages/StudentLogin.tsx`
- `src/pages/AdminLogin.tsx`

## 📦 Tech Stack

- React 18 + TypeScript
- Vite (with optimized build config)
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM (with lazy loading)
- Radix UI (accessible components)

## 🛠️ Commands

```bash
npm run dev       # Development server
npm run build     # Production build (optimized)
npm run preview   # Preview production build
```

## 🌐 Deployment

Deployed on Vercel. Push to main branch to auto-deploy.

### Build Optimizations:
- Code splitting by route
- Vendor chunk separation (React, UI libraries)
- Tree shaking enabled
- Asset optimization

## 🔧 Configuration Files

- `vite.config.ts` - Build optimization settings
- `vercel.json` - Deployment configuration
- `tailwind.config.ts` - Design system
- `tsconfig.json` - TypeScript settings

## 📱 Routes

- `/` - Home page
- `/members` - Members page
- `/activities` - Activities showcase
- `/about` - About us
- `/contact` - Contact form
- `/student-login` - Student authentication
- `/admin-login` - Admin authentication

---

**Made with ❤️ by MPIRSG**
