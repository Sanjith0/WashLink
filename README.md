# WashLink

A mobile-first car wash booking application built with React, Vite, and Tailwind CSS.

## Features

- Browse available mobile detailers
- Manage your cars and schedule washes
- Inbox messaging system
- Booking confirmation flow
- Modern, responsive UI

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **shadcn/ui** - UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Deploying to Vercel

Vercel is the easiest way to deploy your React app. Here are the steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**

   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git add .
     git commit -m "Convert to React app"
     git push origin main
     ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it as a static site
   - **Framework Preset**: Select "Other" or leave as auto-detected
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Click "Deploy"

3. **Your app will be live!**
   - Vercel will provide you with a deployment URL
   - Every push to your main branch will trigger a new deployment

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The project includes a `vercel.json` file that configures:

- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes redirect to `index.html` for client-side routing

## Project Structure

```
WashLink/
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   ├── components/
│   │   └── ui/          # UI components (Button, Card)
│   └── lib/
│       └── utils.ts     # Utility functions
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment configuration
└── package.json         # Dependencies
```

## Environment Variables

This project doesn't require any environment variables for basic functionality. If you add features that need API keys or secrets, add them in the Vercel dashboard under Project Settings → Environment Variables.

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your domain and follow the DNS configuration instructions

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React, Vite, and Vercel
