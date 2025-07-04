# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

This is the easiest way to deploy your Next.js portfolio website.

### Step 1: Prepare Your Repository

1. Make sure all your changes are committed:
```bash
git add .
git commit -m "Initial portfolio website"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository (`luciry/luciry`)
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"

**That's it!** Your website will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `lucacirillo.com`)
3. Follow the DNS configuration instructions

## 🔧 Alternative Deployment Options

### GitHub Pages
This project is configured for static export:
```bash
npm run build
```
Then upload the `out` folder to GitHub Pages.

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### Other Static Hosting
The project exports to static files in the `out` directory, making it compatible with any static hosting service.

## 🌐 Environment Variables

Currently, no environment variables are needed for this portfolio site. If you add features like contact forms or analytics, you can add them in your Vercel dashboard under "Settings" → "Environment Variables".

## 📱 Testing

Before deploying, test your website locally:

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
```

## 🔄 Continuous Deployment

Once connected to Vercel, every push to your main branch will automatically trigger a new deployment. You can also preview changes by creating pull requests.

## 🎯 Performance Tips

- Images are optimized by Next.js automatically
- The site is statically exported for maximum performance
- Framer Motion animations are optimized for 60fps
- CSS is minimized and purged in production

## 🐛 Troubleshooting

### Build Errors
- Run `npm run build` locally first
- Check the Vercel build logs for specific errors
- Ensure all dependencies are in `package.json`

### Performance Issues
- Use Next.js Image component for images
- Minimize bundle size with tree shaking
- Use lazy loading for heavy components

### SEO
- Meta tags are already configured
- Add your actual domain to `next.config.js` if needed
- Submit your sitemap to Google Search Console 