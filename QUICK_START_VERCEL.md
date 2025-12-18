# Quick Start: Deploy to Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com - free tier is fine)
- Code is committed and pushed to GitHub (already done ✅)

## Step 1: Push to GitHub (if not already pushed)

```bash
git push origin liveBranch
```

If you need to set up a new GitHub repository:
1. Create new repository on GitHub
2. Run: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git`
3. Run: `git push -u origin liveBranch`

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** or **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

## Step 3: Configure Project Settings

### Framework Settings (Auto-detected)
- **Framework Preset**: Next.js
- **Root Directory**: `./` (or `wordpress-frontend` if repository root is parent)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Environment Variables

Click **"Environment Variables"** and add:

```
NEXT_PUBLIC_WORDPRESS_API_URL
Value: https://aaronheine.com/wp-json/wp/v2
```

Apply to:
- ✅ Production
- ✅ Preview  
- ✅ Development

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `your-project-name.vercel.app`

## Step 5: Add Custom Domain

1. In Vercel project → **Settings** → **Domains**
2. Click **"Add"** 
3. Enter: `aaronheine.com`
4. Enter: `www.aaronheine.com` (optional)
5. Vercel will show DNS configuration instructions
6. **DO NOT configure DNS yet** - wait for next step

## Step 6: Configure DNS in SiteGround

Follow the detailed instructions in `VERCEL_DNS_INSTRUCTIONS.md` 

**Quick summary:**
- Point main domain (`@`) to Vercel IP addresses
- Keep subdomains pointing to SiteGround IP
- Ensure WordPress remains accessible for API and images

## Step 7: Verify Deployment

After DNS propagates (may take 24-48 hours):

- ✅ Homepage loads: https://aaronheine.com
- ✅ Blog posts work: https://aaronheine.com/life
- ✅ Portfolio pages work: https://aaronheine.com/portfolio
- ✅ Images load: Check that images from `/wp-content/uploads/` display
- ✅ WordPress API: https://aaronheine.com/wp-json/wp/v2 (should still work)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `NEXT_PUBLIC_WORDPRESS_API_URL` is set correctly
- Ensure all dependencies are in `package.json`

### Images Not Loading
- Verify WordPress `/wp-content/uploads/` is accessible
- Check image URLs in browser dev tools network tab
- Ensure DNS changes didn't break WordPress access

### API Calls Fail
- Verify environment variable is set correctly
- Test API endpoint directly: https://aaronheine.com/wp-json/wp/v2/posts
- Check browser console for CORS errors

## Next Steps

1. Monitor first deployment for any errors
2. Set up automatic deployments (enabled by default on git push)
3. Configure preview deployments for pull requests (optional)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: Available in dashboard
- See `DEPLOYMENT.md` for detailed deployment guide
- See `VERCEL_DNS_INSTRUCTIONS.md` for DNS configuration

