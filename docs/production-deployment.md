# Production Deployment Guide

This document provides instructions for deploying the Krishi Shield application to production.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- A hosting platform (Vercel, Netlify, or similar)

## Environment Variables

Before deploying, make sure to set the following environment variables:

```bash
NEXT_PUBLIC_APP_NAME=Krishi Shield
NEXT_PUBLIC_APP_DESCRIPTION=Empowering Indian oilseed farmers with virtual hedging simulations, AI-powered market insights, and blockchain-inspired trust.
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_ENV=production
NEXT_PUBLIC_ENABLE_MOCK_DATA=false
NEXT_PUBLIC_ENABLE_DEMO_MODE=true
```

## Build Process

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm run start
   ```

## Deployment to Vercel

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy!

## Security Considerations

- All security headers are automatically applied via Next.js configuration
- Content Security Policy is enforced to prevent XSS attacks
- HTTPS is enforced in production
- Clickjacking protection is enabled

## Performance Optimizations

- Images are automatically optimized using Next.js Image component
- Automatic code splitting is enabled
- Static assets are cached with long TTLs
- CSS is optimized and minified

## Monitoring

- Errors are logged to the console in production
- Performance metrics are collected (in development)
- Component error boundaries are implemented

## SEO

- Sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is available at `/robots.txt`
- Meta tags are properly configured for each page

## Caching

- Static assets are cached for 1 year
- Images are cached for 30 days
- API responses should be cached appropriately in your backend

## Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your hosting platform supports Next.js
4. Check the server logs for any error messages

## Support

For support, contact the development team or check the GitHub repository issues.