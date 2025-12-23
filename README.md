# WashLink

A mobile-first car wash booking application built with Next.js, React, and Tailwind CSS.

## Features

- Browse available mobile detailers
- Manage your cars and schedule washes
- Inbox messaging system
- Booking confirmation flow
- Modern, responsive UI

## Tech Stack

- **Next.js 14** - React framework
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to Vercel

Vercel is the easiest way to deploy your Next.js app. Here are the steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**

   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the project
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

### Build Configuration

Vercel will automatically detect Next.js and use these settings:

- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

No additional configuration is needed!

## Project Structure

```
WashLink/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   └── ui/             # UI components (Button, Card)
├── lib/
│   └── utils.ts        # Utility functions
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
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

Built with ❤️ using Next.js and Vercel
