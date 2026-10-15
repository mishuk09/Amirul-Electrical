# Amirul Electrical Services — Novanest demo

A responsive single-page concept built with Next.js App Router, TypeScript and Tailwind CSS v4.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production validation, run `npm run build`, then `npm start` to serve the build.

## Add your photos

Copy your selected local assets from `sources/imges` to `public/images` and rename them as follows, or edit the image paths in `app/page.tsx`:

| Path used by the page | Suggested content |
| --- | --- |
| `/images/hero.jpg` | Best work or technician photo; portrait-friendly crop |
| `/images/electrical.jpg` | Electrical installation; landscape crop |
| `/images/wiring.jpg` | Wiring work; landscape crop |
| `/images/aircond.jpg` | Air-conditioning work; landscape crop |

Image slots display a designed, clearly labeled placeholder when a file is missing. Update the alt text to describe the actual photos. No stock photos or external fonts are required.

## Customize

- All color and font-size tokens are in `:root` in `app/globals.css`. Layout uses Tailwind utilities alongside reusable component styles.
- Content, contact links and service definitions are in `app/page.tsx`; the image fallback component is in `components/photo.tsx`.
- Phone and address come from the supplied business text. The Google rating and 24-hour opening hours are from that source and have not been independently verified. Confirm details with the business before launch.
- Service copy avoids invented qualifications, guarantees, prices or testimonials. Phone links open the dialer; directions open Google Maps. No contact form or backend is needed.
- The demo is labeled in the footer and has `noindex` metadata in `app/layout.tsx`. Once approved for launch, update the metadata, remove the demo notice and enable indexing.

## Checks

```sh
npm run typecheck
npm run build
```
