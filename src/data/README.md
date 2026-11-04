# Restaurant data controls

This folder is the reusable control center.

- `site.ts` — restaurant name, copy, contact, WhatsApp, hours, navigation labels, SEO copy.
- `menu.ts` — every menu category, dish, price, description, tags, add-ons and dish-image assignment.
- `images.ts` — every temporary/splash image, story image, gallery image and hero media path.
- `../public/videos/` and `../public/images/` — local hero video and poster assets served at `/videos/*` and `/images/*`.
- `sections.ts` — craft section copy and gallery ordering.
- `hero.ts` — hero scenes, labels and CTA.
- `../config.ts` — compatibility aggregator only; it should rarely need editing.

For a new restaurant, edit the files in `src/data/`. Components should not require restaurant-specific edits.
