# Image Loading Fix

## Problem
After pointing `aaronheine.com` DNS to Vercel, images at `aaronheine.com/wp-content/uploads/...` are trying to load from Vercel, but they're actually hosted on SiteGround.

## Solution Options

### Option 1: Use WordPress Subdomain (RECOMMENDED)

1. **Create WordPress subdomain in SiteGround:**
   - Add A record: `wp.aaronheine.com` → `35.215.119.21` (SiteGround IP)
   - Configure WordPress to use this subdomain

2. **Update WordPress Settings:**
   - In WordPress admin, go to Settings → General
   - Change WordPress Address (URL) to: `https://wp.aaronheine.com`
   - Change Site Address (URL) to: `https://wp.aaronheine.com`

3. **Update codebase to use subdomain for images:**
   - Change all image URLs from `https://aaronheine.com/wp-content/...` to `https://wp.aaronheine.com/wp-content/...`
   - Update `next.config.ts` remotePatterns to include `wp.aaronheine.com`

### Option 2: Keep Current DNS, Use Vercel Rewrites

The `vercel.json` file has been updated with rewrites, but this may not work perfectly because:
- Vercel rewrites to IP addresses may not work as expected
- WordPress needs proper Host headers

**Current vercel.json rewrite attempt:**
```json
{
  "rewrites": [
    {
      "source": "/wp-content/:path*",
      "destination": "https://35.215.119.21/wp-content/:path*",
      "headers": {
        "Host": "aaronheine.com"
      }
    }
  ]
}
```

This needs to be tested after deployment.

### Option 3: Move Images to CDN or Vercel

- Upload all WordPress images to a CDN (Cloudinary, AWS S3, etc.)
- Or move them to Vercel's public directory (but this defeats the purpose of using WordPress)

## Immediate Action Needed

1. **Check if images work with current rewrite** - Deploy and test
2. **If not working, implement Option 1 (subdomain)** - This is the most reliable solution
3. **Update environment variable** - If using subdomain, change:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL=https://wp.aaronheine.com/wp-json/wp/v2
   ```

## Testing

After making changes, test:
- Homepage images load
- Portfolio page images load
- Blog post images load
- WordPress API still works

