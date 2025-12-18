# DNS Configuration Instructions for SiteGround → Vercel

## Overview
This guide explains how to configure DNS in SiteGround to point your main domain (aaronheine.com) to Vercel while keeping WordPress and subdomains on SiteGround.

## Step-by-Step DNS Configuration

### 1. Get Vercel DNS Information

After adding your domain in Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `aaronheine.com`
3. Vercel will show you the DNS configuration options:
   - **Option A**: A records (IP addresses)
   - **Option B**: CNAME record (if supported by your DNS provider)

### 2. Access SiteGround DNS Zone Editor

1. Log in to SiteGround Customer Area
2. Go to Websites → Select your site
3. Navigate to **DNS Zone Editor** (usually under Domain or DNS settings)

### 3. Configure Main Domain for Vercel

**IMPORTANT**: Before making changes, note your current A record values in case you need to revert.

**Option 1: Using A Records (Recommended for root domain)**
1. Find the existing A record for `@` (or `aaronheine.com`)
2. Note the current IP address (you may need this for WordPress access)
3. Delete or modify the A record
4. Add new A records with Vercel's IP addresses:
   - Type: `A`
   - Name: `@` (or blank, represents root domain)
   - Value: [First IP from Vercel]
   - TTL: 3600 (or default)
   - Repeat for each IP address Vercel provides (typically 2-4 IPs)

**Option 2: Using CNAME (If SiteGround supports CNAME at root)**
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com` (or what Vercel provides)
- TTL: 3600

### 4. Keep Subdomains on SiteGround

For each subdomain you want to keep on SiteGround:

1. Find existing A records for subdomains (e.g., `www`, `blog`, etc.)
2. Keep them pointing to SiteGround's IP address
3. If a subdomain doesn't exist, add:
   - Type: `A`
   - Name: `[subdomain]` (e.g., `www`, `blog`)
   - Value: [SiteGround IP address - same as old @ record]
   - TTL: 3600

### 5. WordPress Access Configuration

Since your main domain will point to Vercel, you need to ensure WordPress remains accessible:

**Recommended Approach:**
- Keep WordPress accessible via the main domain (it should still work for `/wp-admin`, `/wp-json`, and `/wp-content`)
- OR create a subdomain like `wp.aaronheine.com` pointing to SiteGround for WordPress admin access

### 6. DNS Record Summary Example

```
Type    Name              Value                    TTL
----    ----              -----                    ---
A       @                 [Vercel IP 1]            3600
A       @                 [Vercel IP 2]            3600
A       www               [SiteGround IP]          3600
A       [other-subdomain] [SiteGround IP]          3600
```

## Important Notes

### Propagation Time
- DNS changes can take 24-48 hours to propagate globally
- Some users may see old site, others new site during propagation
- You can check propagation status at: https://www.whatsmydns.net

### WordPress API and Images
- WordPress REST API at `https://aaronheine.com/wp-json/wp/v2` must remain accessible
- Images at `https://aaronheine.com/wp-content/uploads/**` must remain accessible
- If main domain points to Vercel, ensure WordPress files are still served from SiteGround for these paths

### Testing
1. After DNS changes, test the main domain: `https://aaronheine.com`
2. Test WordPress API: `https://aaronheine.com/wp-json/wp/v2`
3. Test an image URL: `https://aaronheine.com/wp-content/uploads/[any-image].jpg`
4. Test WordPress admin: `https://aaronheine.com/wp-admin` (may need subdomain if DNS breaks this)

### Rollback Plan
If something goes wrong, revert the DNS changes:
1. Delete the new A records for `@`
2. Restore the original A record pointing to SiteGround IP
3. Wait for DNS propagation

## SiteGround-Specific Tips

1. **DNS Zone Editor Location**: Usually found under "Websites" → "Your Site" → "DNS Zone Editor" or "Domain" → "DNS"

2. **TTL Settings**: Lower TTL (e.g., 300 seconds) before making changes for faster propagation, then increase after changes are live

3. **Multiple A Records**: SiteGround should support multiple A records for the same name - add all IPs Vercel provides

4. **Support**: If you need help, SiteGround support can assist with DNS configuration

## After DNS Configuration

1. Wait for DNS propagation (check with whatsmydns.net)
2. Verify Vercel deployment is live at aaronheine.com
3. Test all functionality:
   - Homepage loads
   - Blog posts load
   - Images display
   - WordPress API responds
   - All app links work

## Need Help?

- SiteGround Support: Available in customer area
- Vercel Documentation: https://vercel.com/docs/concepts/projects/domains/add-a-domain
- DNS Checker: https://www.whatsmydns.net

