# DNS Changes Checklist for aaronheine.com

## Current SiteGround DNS Records
- Root domain (@): 35.215.119.21 (SiteGround)
- www: 35.215.119.21 (SiteGround)
- Multiple subdomains: 35.215.119.21 (SiteGround)
- Email (MX records): mailspamprotection.com
- TXT records: SPF and DKIM

## Vercel Recommendations
- Root domain (@): A record → 216.198.79.1
- www: CNAME → bbfa3dce9b5f1901.vercel-dns-017.com

## Changes to Make

### ✅ CHANGE: Root Domain
- **Current**: A record `aaronheine.com.` → `35.215.119.21`
- **New**: A record `aaronheine.com.` → `216.198.79.1`
- **Action**: Edit existing A record, change IP address

### ✅ CHANGE: www Subdomain
- **Current**: A record `www.aaronheine.com.` → `35.215.119.21`
- **New**: CNAME `www` → `bbfa3dce9b5f1901.vercel-dns-017.com`
- **Action**: Delete A record, add CNAME record

### ⚠️ KEEP UNCHANGED: All Other Subdomains
Keep these pointing to SiteGround (35.215.119.21):
- mail.aaronheine.com
- ftp.aaronheine.com
- autodiscover.aaronheine.com
- autoconfig.aaronheine.com
- mysteryquiz.aaronheine.com
- www.mysteryquiz.aaronheine.com
- ssh.aaronheine.com
- localhost.aaronheine.com

### ⚠️ KEEP UNCHANGED: Email Records
- MX records (mailspamprotection.com)
- TXT records (SPF, DKIM)

## WordPress Access After DNS Change

**⚠️ IMPORTANT**: After changing the root domain to Vercel, verify WordPress remains accessible:

1. **WordPress Admin**: https://aaronheine.com/wp-admin
2. **WordPress API**: https://aaronheine.com/wp-json/wp/v2
3. **Images**: https://aaronheine.com/wp-content/uploads/**

If WordPress becomes inaccessible, you may need to:
- Access WordPress via a subdomain (e.g., wp.aaronheine.com)
- Or configure WordPress to work with the new DNS setup

## Step-by-Step Instructions

1. Log into SiteGround Customer Area
2. Go to Websites → Select your site
3. Open DNS Zone Editor
4. **Edit root domain A record**:
   - Find: `aaronheine.com.` (Type: A, Value: 35.215.119.21)
   - Edit → Change Value to: `216.198.79.1`
   - Save
5. **Change www from A to CNAME**:
   - Find: `www.aaronheine.com.` (Type: A, Value: 35.215.119.21)
   - Delete this A record
   - Add new record:
     - Type: CNAME
     - Hostname: `www`
     - Value: `bbfa3dce9b5f1901.vercel-dns-017.com`
   - Save
6. **Verify all other records remain unchanged**
7. Wait for DNS propagation (1-48 hours)

## Testing After DNS Changes

After DNS propagates:
- [ ] https://aaronheine.com loads (Vercel site)
- [ ] https://www.aaronheine.com loads (Vercel site)
- [ ] https://aaronheine.com/wp-admin works (WordPress)
- [ ] https://aaronheine.com/wp-json/wp/v2 works (WordPress API)
- [ ] Images load from /wp-content/uploads/
- [ ] Email still works (check MX records)
- [ ] Subdomains (mail, ftp, etc.) still work

## Rollback Plan

If something breaks, revert changes:
1. Change root domain A record back to: 35.215.119.21
2. Change www back to A record: 35.215.119.21
3. Wait for DNS propagation

