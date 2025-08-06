# Deployment Guide for World Police Fire Games 2029

## Prerequisites

1. **Clerk Account**: Sign up at [dashboard.clerk.com](https://dashboard.clerk.com)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **GitHub Repository**: Your code should be in a GitHub repository

## Step 1: Set up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Go to **API Keys** section
4. Copy your **Publishable Key** and **Secret Key**

## Step 2: Configure Environment Variables

### For Local Development:
1. Copy `.env.local` and update with your actual Clerk credentials:
```bash
# Replace these with your actual Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_here

# Update with your domain
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### For Vercel Production:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_live_your_production_key
CLERK_SECRET_KEY = sk_live_your_production_secret
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME = World Police Fire Games
NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /
NEXT_PUBLIC_VERCEL_ANALYTICS = true
```

## Step 3: Configure Clerk for Production

1. In your Clerk Dashboard, go to **Domains**
2. Add your Vercel domain (e.g., `your-app.vercel.app`)
3. Update **Allowed redirect URLs** to include:
   - `https://your-domain.vercel.app`
   - `https://your-domain.vercel.app/sign-in`
   - `https://your-domain.vercel.app/sign-up`

## Step 4: Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Deploy via GitHub Integration
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **New Project**
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Add your environment variables in the deployment settings
6. Click **Deploy**

## Step 5: Post-Deployment Checklist

- [ ] Test authentication (sign up/sign in)
- [ ] Verify all pages load correctly
- [ ] Check that environment variables are properly set
- [ ] Test responsive design on mobile devices
- [ ] Verify analytics are working (if enabled)

## Troubleshooting Common Issues

### Build Errors
- **Clerk key error**: Make sure your environment variables are set correctly
- **Static export error**: Ensure `next.config.js` doesn't have `output: 'export'`

### Authentication Issues
- **Redirect errors**: Check Clerk domain configuration
- **Key errors**: Verify you're using the correct publishable/secret key pair

### Performance Issues
- Images not loading: Check `next.config.js` image configuration
- Slow loading: Enable Vercel Analytics to monitor performance

## Production Optimizations Applied

✅ Removed static export configuration  
✅ Configured proper image optimization  
✅ Set up environment variables structure  
✅ Disabled Next.js telemetry for faster builds  
✅ Configured Vercel regions for better performance  

## Support

If you encounter issues:
1. Check Vercel build logs
2. Verify environment variables are set
3. Check Clerk dashboard for authentication errors
4. Review this deployment guide

---

**Note**: Remember to never commit your actual API keys to version control. Always use environment variables for sensitive information.