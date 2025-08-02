# GitHub Pages Deployment Guide

## Overview
Your Next.js project is now configured to build a static site optimized for GitHub Pages deployment at:
**https://last-man-prem.github.io/last-man-prem-web/**

## What Was Configured

### 1. Next.js Configuration (`next.config.ts`)
- ✅ Static export enabled (`output: 'export'`)
- ✅ Output directory set to `docs` folder
- ✅ Base path configured for GitHub Pages subpath
- ✅ Images configured for static export
- ✅ Trailing slashes enabled for GitHub Pages compatibility

### 2. Asset Path Handling
- ✅ Created `getAssetPath()` utility function for dynamic base path handling
- ✅ Updated all image references to use the utility
- ✅ Fixed noise.svg background to use dynamic paths

### 3. Navigation Links
- ✅ All navigation uses Next.js Link components for proper base path handling
- ✅ Updated internal links to use Link instead of anchor tags

### 4. Static Files
- ✅ Added `.nojekyll` file to prevent Jekyll processing
- ✅ All assets correctly reference base path in production

## How to Deploy

### Option 1: Using GitHub Actions (Recommended)
1. Push your code to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The site will auto-deploy on every push

### Option 2: Manual Deployment
1. Run the build command:
   ```bash
   npm run build
   ```
2. Commit and push the `docs` folder to GitHub
3. Go to repository settings → Pages
4. Set source to "Deploy from a branch"
5. Select `main` branch and `/docs` folder
6. Save the settings

## Commands

- **Development**: `npm run dev` (runs on http://localhost:3000)
- **Production Build**: `npm run build` (creates static site in `docs/` folder)
- **Linting**: `npm run lint`

## File Structure After Build
```
docs/
├── .nojekyll              # Prevents Jekyll processing
├── index.html             # Homepage
├── 404.html              # 404 page
├── how-it-works/         # How it works page
├── join-now/             # Join now page  
├── rules/                # Rules page
├── images/               # Static images
├── *.svg                 # Icon files
└── _next/                # Next.js generated assets
    ├── static/
    └── ...
```

## Important Notes

1. **Base Path**: The site is configured for the subpath `/last-man-prem-web/`
2. **Asset Paths**: All assets automatically include the base path in production
3. **Clean URLs**: Trailing slashes are enabled for GitHub Pages compatibility
4. **Image Optimization**: Disabled for static export compatibility

## Troubleshooting

If assets don't load correctly:
1. Verify the GitHub Pages source is set correctly
2. Check that `.nojekyll` file exists in the `docs` folder
3. Ensure all asset references use the `getAssetPath()` utility

## GitHub Pages URL
Once deployed, your site will be available at:
**https://last-man-prem.github.io/last-man-prem-web/**
