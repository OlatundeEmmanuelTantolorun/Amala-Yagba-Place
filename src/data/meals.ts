// ALL menu content + images + hero video live here.
//
// TEMPORARY IMAGES:
// Dish images currently use Unsplash URLs for the demo.
// To replace an image later, either:
// 1. Drop a local file into public/images/dishes/ using the generated slug, OR
// 2. Pass a custom image URL as the last argument to dish().
//
// Example:
//   dry-aged-ribeye.jpg
//
// The local image path is used as the final fallback if no temporary
// Unsplash image is configured.

export type Dish = {
  name: string;
  price: number;
  desc: string;
  tags: string[];
  image: string;
  addon?: { label: string; price: number };
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/**
 * Temporary Unsplash images for the demo.
 *
 * These are intentionally mapped by dish name so the same dish
 * always gets the same image.
 *
 * Replace these with real restaurant photography before using
 * the demo for a real client.
 */
const tempImages: Record<string, string> = {
  "Heirloom Root Medley":
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85",

  "Wild Forest Fungi":
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85",

  "Charred Brassica":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=85",

  "Smoked Pumpkin Velouté":
    "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2b?auto=format&fit=crop&w=1600&q=85",

  "Dry-Aged Ribeye":
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=85",

  "Hearth Duck":
    "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=1600&q=85",

  "Wild Grass Lamb":
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",

  "Smoked Pork Belly":
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=85",

  "Diver Scallops":
    "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=1600&q=85",

  "Wild Sea Bass":
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1600&q=85",

  "Arctic Char":
    "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1600&q=85",

  "Blue Lobster":
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1600&q=85",

  "Château Margaux":
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",

  "Gaja Barbaresco":
    "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1600&q=85",

  Balvenie:
    "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1600&q=85",

  "Clase Azul":
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=85",
};

const dish = (
  name: string,
  price: number,
  desc: string,
  tags: string[],
  addon?: Dish["addon"],
  image?: string,
): Dish => ({
  name,
  price,
  desc,
  tags,
  addon,
  image: image ?? tempImages[name] ?? `/images/dishes/${slug(name)}.jpg`,
});

export const menu: Record<string, Dish[]> = {
  "The Earth": [
    dish(
      "Heirloom Root Medley",
      24,
      "Roots roasted in embers, whipped goat curd, herb oil.",
      ["Vegetarian", "Seasonal"],
      { label: "Shaved truffle", price: 12 },
    ),

    dish(
      "Wild Forest Fungi",
      28,
      "Mushrooms seared on the plancha, cured yolk, toasted rye.",
      ["Vegetarian"],
    ),

    dish(
      "Charred Brassica",
      22,
      "Cabbage blistered over flame, brown butter, preserved lemon.",
      ["Vegan option"],
    ),

    dish(
      "Smoked Pumpkin Velouté",
      19,
      "Silky velouté, pumpkin seed praline, smoked oil.",
      ["Vegetarian", "Warm"],
    ),
  ],

  "The Flame": [
    dish(
      "Dry-Aged Ribeye",
      78,
      "Forty-day aged, charcoal-seared, bone-marrow jus.",
      ["Dry-aged", "350 g"],
      { label: "Bone-marrow butter", price: 8 },
    ),

    dish("Hearth Duck", 56, "Slow-roasted breast, cherry, fennel pollen.", [
      "Hearth-roasted",
    ]),

    dish("Wild Grass Lamb", 62, "Rack over vine embers, mint salsa verde.", [
      "Pasture raised",
    ]),

    dish(
      "Smoked Pork Belly",
      42,
      "Twelve hours in smoke, crackled, apple mustard.",
      ["Slow smoked"],
    ),
  ],

  "The Sea": [
    dish(
      "Diver Scallops",
      46,
      "Hand-dived, seared in the shell, sea herbs, citrus butter.",
      ["Shellfish"],
    ),

    dish(
      "Wild Sea Bass",
      52,
      "Skin crisped on the coals, fennel, beurre blanc.",
      ["Line caught"],
    ),

    dish("Arctic Char", 44, "Cedar-planked, pickled shallot, dill cream.", [
      "Sustainable",
    ]),

    dish(
      "Blue Lobster",
      95,
      "Split and grilled, tarragon butter, charred lemon.",
      ["Shellfish", "Signature"],
      { label: "Caviar", price: 25 },
    ),
  ],

  "The Cellar": [
    dish(
      "Château Margaux",
      420,
      "A benchmark Bordeaux, served by the bottle.",
      ["Red", "Bottle"],
    ),

    dish("Gaja Barbaresco", 260, "Perfumed, structured Piedmont nebbiolo.", [
      "Red",
      "Bottle",
    ]),

    dish("Balvenie", 28, "Speyside single malt, neat or over rock.", [
      "Whisky",
      "Measure",
    ]),

    dish("Clase Azul", 36, "Ultra-premium reposado tequila.", [
      "Tequila",
      "Measure",
    ]),
  ],
};

// HERO VIDEO (scroll-scrub, desktop).
//
// Put the actual video in:
//   public/video/hero.mp4
//
// Then keep:
//   src: "/video/hero.mp4"
//
// If the video isn't available, set src to null and the built-in
// placeholder film should be used.
//
// Poster image:
//   public/video/hero-poster.jpg

export const heroVideo = {
  src: "/videos/hero.mp4" as string | null,
  poster: "/video/hero-poster.jpg" as string | null,
};
