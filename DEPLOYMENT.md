# Deployment Guide for aaronheine.com

## Architecture Overview

- **Frontend**: Next.js app deployed on Vercel
- **Backend**: WordPress hosted on SiteGround (provides REST API and images)
- **Domain**: aaronheine.com → Vercel (main site)
- **WordPress**: Accessible at aaronheine.com/wp-admin (or subdomain if configured)
- **Images**: Served from aaronheine.com/wp-content/uploads/** (SiteGround)

## Vercel Deployment Steps

### 1. Initial Setup

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository containing this codebase
4. Vercel will auto-detect Next.js

### 2. Configure Environment Variables

In Vercel project settings → Environment Variables, add:

```
NEXT_PUBLIC_WORDPRESS_API_URL=https://aaronheine.com/wp-json/wp/v2
```

Apply to: Production, Preview, and Development environments

### 3. Build Settings

Vercel should auto-detect:
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next` (default)
- Install Command: `npm install`

### 4. Deploy

1. Click "Deploy" 
2. Wait for build to complete
3. Note the deployment URL (e.g., `your-project.vercel.app`)

## DNS Configuration in SiteGround

### Important: WordPress and Images Must Remain Accessible

Since images are served from `aaronheine.com/wp-content/uploads/**`, you need to ensure WordPress remains accessible. Here are two options:

### Option 1: Use Subdomain for WordPress (Recommended)

1. In SiteGround, create a subdomain: `wp.aaronheine.com` pointing to your WordPress installation
2. Update WordPress settings to use the subdomain
3. Keep main domain pointing to SiteGround initially for WordPress
4. Then point main domain to Vercel

### Option 2: Keep WordPress at Root (Requires DNS Configuration)

**For the main domain (aaronheine.com):**
1. In SiteGround DNS Zone Editor:
   - Remove or keep existing A record (you'll change this)
   - Add A record: `@` → Vercel IP addresses (Vercel will provide these after adding domain)
   - OR use CNAME: `@` → `cname.vercel-dns.com` (if your DNS provider supports CNAME at root)
2. Vercel typically uses multiple IP addresses - add all A records provided

**For WordPress API access:**
- The WordPress REST API at `/wp-json/wp/v2` will still work if WordPress remains accessible
- However, if main domain points to Vercel, WordPress admin at `/wp-admin` may need subdomain access

**For subdomains (keep on SiteGround):**
- Keep existing A records pointing to SiteGround IP
- Examples:
  - `www.aaronheine.com` → SiteGround IP (if you want www on SiteGround)
  - Any other subdomains → SiteGround IP

## Vercel Domain Configuration

1. In Vercel project dashboard, go to Settings → Domains
2. Add domain: `aaronheine.com`
3. Add domain: `www.aaronheine.com` (optional, or configure redirect)
4. Vercel will provide DNS configuration instructions
5. SSL certificates are automatically provisioned by Vercel

## DNS Record Summary

### Point to Vercel (Main Domain)
```
Type: A or CNAME
Name: @ (or aaronheine.com)
Value: [Vercel provided IP addresses or CNAME target]
```

### Point to SiteGround (Subdomains)
```
Type: A
Name: [subdomain] (e.g., www, blog, etc.)
Value: [SiteGround IP address]
```

### WordPress API Access
The WordPress REST API endpoint (`/wp-json/wp/v2`) and images (`/wp-content/uploads/**`) should remain accessible via the main domain OR a subdomain depending on your DNS setup.

## Post-Deployment Checklist

- [ ] Verify site loads at aaronheine.com
- [ ] Test WordPress API calls (check browser network tab)
- [ ] Verify images load correctly
- [ ] Test all app icons and portfolio images
- [ ] Check blog posts load correctly
- [ ] Verify SSL certificates are working (HTTPS)
- [ ] Test WordPress admin access (may need subdomain)

## Troubleshooting

### Images Not Loading
- Ensure WordPress `/wp-content/uploads/` remains accessible
- Check image URLs in browser dev tools
- Verify DNS hasn't broken WordPress access

### API Calls Failing
- Verify `NEXT_PUBLIC_WORDPRESS_API_URL` environment variable is set correctly in Vercel
- Check CORS settings in WordPress if needed
- Verify WordPress REST API is accessible: `https://aaronheine.com/wp-json/wp/v2`

### Build Failures
- Check Vercel build logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility (Next.js 16 requires Node 18+)

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel DNS Configuration](https://vercel.com/docs/concepts/projects/domains)

