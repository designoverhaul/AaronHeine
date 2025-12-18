# Troubleshooting Deployment Issues

## Current Issues (4 hours after DNS change)

1. **Vercel Security Checkpoint (403 errors)** - Site showing security checkpoint instead of content
2. **404 errors on some pages** - Portfolio page and others not loading
3. **Homepage not updated** - Still showing old version

## Solutions to Try

### 1. Verify Domain Configuration in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Verify `aaronheine.com` and `www.aaronheine.com` are both added
3. Check that domain status shows as "Valid Configuration" or "Active"
4. If domain shows as "Invalid" or "Pending", wait for DNS to fully propagate

### 2. Trigger New Deployment

The latest code might not be deployed yet:

1. Go to Vercel Dashboard → Your Project → Deployments
2. Check the latest deployment - does it show the latest commit?
3. If not, click "Redeploy" on the latest deployment
4. OR push a new commit to trigger automatic deployment:
   ```bash
   git commit --allow-empty -m "Trigger Vercel redeploy"
   git push origin liveBranch
   ```

### 3. Clear Vercel Cache

1. In Vercel Dashboard → Deployments
2. Click on the latest deployment
3. Look for "Redeploy" option
4. Select "Use existing Build Cache" = NO (to force fresh build)

### 4. Check DNS Propagation

DNS changes can take 24-48 hours to fully propagate:

1. Check DNS propagation: https://www.whatsmydns.net/#A/aaronheine.com
2. Verify it shows Vercel IP: `216.198.79.1` in most locations
3. If still showing old IP (35.215.119.21) in many locations, wait longer

### 5. Verify WordPress API Access

During build, there was a 403 error accessing WordPress API. Verify:

1. Test WordPress API directly: https://aaronheine.com/wp-json/wp/v2/posts
2. If this returns 403 or doesn't work, WordPress might be blocking requests
3. You may need to configure WordPress to allow API access

### 6. Check Vercel Build Logs

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the latest deployment
3. Check "Build Logs" tab
4. Look for any errors or warnings
5. Check "Runtime Logs" for runtime errors

### 7. Force Domain Verification

If domain is stuck in verification:

1. In Vercel → Settings → Domains
2. Remove the domain `aaronheine.com`
3. Wait a few minutes
4. Re-add the domain
5. Update DNS records if Vercel gives new IP addresses

### 8. Test with Direct Vercel URL

Test if the site works on Vercel's default URL:
- `aaron-heine-git-livebranch-aarons-projects-c7a7f4d8.vercel.app`

If this works but the custom domain doesn't, it's a DNS/domain configuration issue.

## Common Issues

### TypeScript Build Errors
- Fixed: `lib/processContent.ts` had missing type annotations
- Solution: Added type annotations to function parameters

### WordPress API 403 During Build
- During static generation, Next.js tries to fetch all blog posts
- If WordPress blocks the build server's IP, this will fail
- Solution: WordPress should allow API access from anywhere, or configure IP allowlist

### Pages Not Found (404)
- Verify pages exist in `app/` directory
- Check build output shows pages as generated
- Ensure routes match exactly (case-sensitive)

### Old Content Showing
- Browser cache - try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Vercel cache - trigger new deployment
- CDN cache - wait or purge cache if available

## Next Steps

1. ✅ Code fixed and pushed to GitHub
2. Check Vercel deployment logs
3. Verify domain is properly configured in Vercel
4. Trigger fresh deployment if needed
5. Wait for DNS to fully propagate
6. Test with direct Vercel URL first

## Still Not Working?

If issues persist after trying above:

1. Check Vercel Status: https://www.vercel-status.com
2. Contact Vercel Support (available in dashboard)
3. Verify WordPress is accessible: https://aaronheine.com/wp-admin
4. Check SiteGround hosting is still active for WordPress

