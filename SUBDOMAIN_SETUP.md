# WordPress Subdomain Setup Instructions

## Why This Is Needed

Vercel deployment protection intercepts requests before Next.js middleware runs, so the middleware proxy approach doesn't work. We need to access WordPress directly via a subdomain.

## Step 1: DNS Configuration in SiteGround

1. Log into SiteGround Customer Area
2. Go to **Websites** → **Your Site** → **DNS Zone Editor**
3. Add a new **A record**:
   - **Type**: A
   - **Hostname/Name**: `wp`
   - **Value/Target**: `35.215.119.21` (SiteGround IP)
   - **TTL**: 3600
4. Save the record

This creates: `wp.aaronheine.com` → SiteGround

## Step 2: WordPress Configuration (in WordPress Admin)

1. Log into WordPress admin (currently at `aaronheine.com/wp-admin` or via SiteGround)
2. Go to **Settings** → **General**
3. Update:
   - **WordPress Address (URL)**: `https://wp.aaronheine.com`
   - **Site Address (URL)**: `https://wp.aaronheine.com`
4. Save changes

⚠️ **Important**: After this change, you'll need to access WordPress admin at `wp.aaronheine.com/wp-admin`

## Step 3: Update Vercel Environment Variable

In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Update `NEXT_PUBLIC_WORDPRESS_API_URL`:
   - **Old**: `https://aaronheine.com/wp-json/wp/v2`
   - **New**: `https://wp.aaronheine.com/wp-json/wp/v2`
3. Apply to: Production, Preview, Development
4. Redeploy after saving

## Step 4: Code Changes

✅ **Already done in this commit:**
- Updated all image URLs to use `wp.aaronheine.com`
- Updated `next.config.ts` to allow images from `wp.aaronheine.com`
- Updated `processContent.ts` to use subdomain as default

## Step 5: Verify Everything Works

After DNS propagates (can take a few minutes to a few hours):

1. **Test WordPress subdomain:**
   - Visit: `https://wp.aaronheine.com/wp-json/wp/v2/posts?per_page=1`
   - Should return JSON with blog posts

2. **Test an image:**
   - Visit: `https://wp.aaronheine.com/wp-content/uploads/2023/11/bayou.png`
   - Should load the image

3. **Test the site:**
   - Visit: `https://www.aaronheine.com` (or your custom domain)
   - Check blog posts load on Random page
   - Check images load throughout the site

## Troubleshooting

### WordPress Admin Access
After changing WordPress URLs, if you can't access admin:
- Access via SiteGround cPanel → WordPress Admin
- Or temporarily access via direct IP: `https://35.215.119.21/wp-admin` (may show SSL warning)

### DNS Not Working
- Wait 15-30 minutes for DNS propagation
- Check: `dig wp.aaronheine.com` or use https://www.whatsmydns.net

### Images Still Not Loading
- Check browser console for errors
- Verify `wp.aaronheine.com` resolves correctly
- Check Vercel deployment logs for errors

