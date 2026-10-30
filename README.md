# Novak Detailing Co.

One-page website for Novak Detailing Co., a mobile and warehouse car detailer serving Akron, Canton and Northeast Ohio.

Plain HTML and CSS. No build step, no dependencies.

## Files

- `index.html`: the whole site, including the page title and description and the business details Google reads (the JSON-LD block in `<head>`)
- `styles.css`: dark theme, brand black and blue
- `script.js`: header menu, before/after slider, photo viewer and scroll animations (the page still works without it)
- `images/`: photos and logos, converted to WebP
- `sitemap.xml`, `robots.txt`, `404.html`

## Preview locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080. You can also just double-click `index.html`.

## Before launch

1. **Domain.** The site assumes `https://www.novakdetailing.com`. If the real domain is different, find and replace it in `index.html`, `robots.txt` and `sitemap.xml`.
2. **Hosting.** Any static host works for free: Cloudflare Pages, Netlify or GitHub Pages. Point it at this repo with no build command and `/` as the output folder.
3. **Google Search Console.** Add the domain, paste the verification tag into `index.html` where the comment marks it, and submit `/sitemap.xml`.
4. **Google Business Profile.** This matters more than anything on the site for local searches. Use the exact same name and phone number as the site (`Novak Detailing Co.`, `740-827-8386`) and link it to the website.

## Editing

- Change text directly in `index.html`.
- New photos: resize to about 1200px on the long side, save as WebP, put them in `images/`, and copy an existing `<img>` line in the gallery. Always write a short, descriptive `alt`.
- When you change content, update `<lastmod>` in `sitemap.xml`.
