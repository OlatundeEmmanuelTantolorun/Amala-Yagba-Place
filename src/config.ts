// Compatibility entry point.
// New reusable controls belong in src/data/*.

import { site } from "./data/site";
import { menu } from "./data/menu";
import { images } from "./data/images";

export type { Dish } from "./data/menu";

export const config = {
  ...site,

  // Nigerian Naira
  currency: "₦",

  // Hero video + poster configuration
  // Keep these connected to images.hero so the existing
  // desktop/mobile scroll-scrub video setup is not affected.
  video: images.hero,

  // Restaurant menu
  menu,
};

export const wa = (text: string) =>
  `https://wa.me/${site.visit.whatsapp}?text=${encodeURIComponent(text)}`;
