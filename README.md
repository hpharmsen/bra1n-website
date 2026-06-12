# BrA1n & Co website

Static one-pager corporate site for BrA1n & Co. NL + EN, no build step.

## Local

```bash
python3 -m http.server 8765
# http://localhost:8765/
```

## Live

https://hpharmsen.github.io/bra1n-website/

Repo: https://github.com/hpharmsen/bra1n-website (public).

Pages config: source = `main` branch, root folder. Push to `main` → GitHub builds en publiceert binnen ~30s.

## Structure

```
index.html        NL one-pager
en/index.html     EN one-pager
404.html
robots.txt
sitemap.xml
assets/
  css/style.css   Design tokens from keystone.ai
  js/main.js      Footer year + IntersectionObserver fade-in
  img/            hp.jpg/webp, michael.jpg/webp (600x600), favicon.svg
```

## Design tokens

Single font (Inter Variable via Google Fonts). Palette derived from keystone.ai:
- Accent `#0409ea` (yk-blue), dark `#00063c` (ultra-marine)
- Soft surface `#e2dfe5` (stone), `#e5eafa` (primarysoft)

## Edits

- Text changes: edit `index.html` and `en/index.html` directly.
- Style: `assets/css/style.css` — CSS custom properties in `:root`.
- Photos: replace `assets/img/hp.{jpg,webp}` and `assets/img/michael.{jpg,webp}`. Keep dimensions 600×600.
