# Push to GitHub - Quick Guide

Your code is committed and ready to push! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `WashLink` (or your preferred name)
3. Choose Public or Private
4. **DO NOT** check "Initialize this repository with a README"
5. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you the commands. Or run these (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/WashLink.git
git branch -M main
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/WashLink.git
git branch -M main
git push -u origin main
```

## After Pushing

Once pushed, you can:
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically deploy your app!

