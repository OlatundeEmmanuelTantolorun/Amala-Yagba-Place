import { images } from "./images"

// Services, walk-in videos, place photos and testimonials.
// Add files to public/videos/ and public/images/place/ and list them here.
// Any file that is missing is hidden automatically.

export const services = [
  ["Dine-in", "Sit down, settle in and enjoy your meal."],
  ["Takeaway", "Packed fresh, ready when you are."],
  ["Home delivery", "Your favourites, brought to your door."],
  ["Catering", "Food for events, offices and celebrations."],
] as const

export const walkIns = [] as const

export const placePhotos = [
  { src: images.sections.dining, label: "Dining room" },
  { src: images.sections.fire, label: "The kitchen" },
  { src: images.sections.plated, label: "At the table" },
  { src: images.sections.evening, label: "The atmosphere" },
]

// Only real comments with the person's name/handle. Add more objects to this list.
export const testimonials = [
  {
    quote: "Found a new Amala spot… let’s see if it’s worth the hype.",
    name: "Farida Esq",
    handle: "@fareedaesq",
    note: "Opening line of her TikTok visit video",
    url: "https://www.tiktok.com/@fareedaesq",
  },
]
