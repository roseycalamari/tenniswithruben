# Tennis With Ruben

Mobile-first Linktree-style landing page for "Tennis With Ruben".
Built with plain HTML, CSS and JavaScript — no frameworks, no build step.

## Run it locally

Just open `index.html` in any modern browser, or serve the folder:

```bash
# Python 3
python -m http.server 5173
# then visit http://localhost:5173
```

```powershell
# Or with Node (if you have it)
npx serve .
```

## Project structure

```
.
├── index.html      # Home / link page
├── precos.html     # Full pricing page
├── styles.css      # Styles (both pages)
├── i18n.js         # Translations PT / EN / FR
├── app.js          # Language switcher + WhatsApp links
└── assets/         # Images, flag icons
```

## What to customize

| What                  | Where                                    |
| --------------------- | ---------------------------------------- |
| WhatsApp phone number | `window.TWR_WA` in `i18n.js`             |
| All text / languages  | `window.TWR_I18N` in `i18n.js`           |
| Prices (amounts)      | `precos.html` (`.price-row-value` cells) |

## Languages

Portuguese is the default. The selector in the top bar switches between
**PT / EN / FR** and remembers the choice in `localStorage`.

All copy lives in `window.TWR_I18N` in `i18n.js`. Edit strings there to
change wording across the home page and `precos.html`.

## Brand & font

- Colors: `#ffffff` (white background), `#bd5c15` (text, details, accents).
- Font: **Garet** is used as the primary family. Garet is a commercial
  font and is not available on free CDNs, so the stylesheet:
  - Uses Garet automatically if it is installed on the visitor's device.
  - Falls back to **Manrope** (free, loaded from Google Fonts) — a close
    geometric sans that keeps the same feel.

If you own a Garet web licence and want to ship it with the site, add the
font files to a `/fonts` folder and replace the `@font-face` block at the
top of `styles.css` with `src: url("/fonts/Garet-Regular.woff2") format("woff2"), …`.

## Features

- 100% mobile-oriented Linktree-style layout (max width ~460px)
- Smooth animated background blobs and staggered card reveals
- Sticky language switcher with animated pill
- Packages modal (bottom-sheet on mobile, centered on desktop) with focus
  trap, Escape key, and backdrop dismiss
- Collapsible "About me" section
- Auto-prefilled WhatsApp messages translated to the active language
- Respects `prefers-reduced-motion` and includes a dark-mode polish
