# Maths Calculators — GitHub Pages Deployment

## What this is
A plain static website (HTML/CSS/JavaScript only, no build step, no PHP, no database) with 7 working calculators, 4 guides, and About/Contact/Privacy/Terms/Disclaimer pages. It is approval-ready for AdSense; approval itself is NOT guaranteed.

## Deploy on GitHub Pages (exact steps)
1. Create a new public repository on GitHub (for example `maths-calculators`).
2. Upload ALL files from this folder to the repository root (index.html must be at the root).
3. Go to Settings > Pages. Under “Build and deployment”, choose “Deploy from a branch”, branch `main`, folder `/ (root)`, and Save.
4. Wait for GitHub Pages to publish the site. Test it at `https://<username>.github.io/<repo>/` first to check every page and calculator works.
5. When the free Student Pack domain is available (around 2026-10-30), connect the CUSTOM domain: in Settings > Pages, enter the custom domain, Save, then add the DNS records your domain registrar asks for (a CNAME for a subdomain, or A records for an apex domain). Tick “Enforce HTTPS” once the certificate is ready.
6. In `sitemap.xml`, replace `YOUR-DOMAIN-HERE` with the real custom domain, and in `robots.txt` do the same. Commit both files.
7. Submit the site to Google Search Console: verify ownership, submit `sitemap.xml`, and confirm pages are indexed.
8. Only after the site is live on the CUSTOM domain and indexed, apply for Google AdSense. Add the AdSense code only after approval, replacing the labelled placeholders. Add your real publisher ID to `ads.txt` only after approval.
9. Before launch, replace the TODO placeholder on contact.html with a real email address.

## What NOT to do before approval
- Do NOT add any other ad network while under AdSense review.
- Do NOT buy traffic, use bots, traffic exchanges, or click your own ads.
- Do NOT ask friends or visitors to click ads, or offer rewards for clicks.
- Do NOT copy content from other calculator sites, and do NOT publish unfinished or placeholder pages.
- Do NOT apply with a bare tool only, or on a github.io subdomain if a custom domain is available.

## Files
See the file list in the delivery report. All internal links are relative, so the site works at the repository root and on a custom domain.
