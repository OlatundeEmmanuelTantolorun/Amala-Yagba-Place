// Services, walk-in videos, place photos and testimonials.
// Add files to public/videos/ and public/images/place/ and list them here.
// Any file that is missing is hidden automatically.

export const services = [
  ["Dine-in", "Sit down, settle in and enjoy your meal."],
  ["Takeaway", "Packed fresh, ready when you are."],
  ["Home delivery", "Your favourites, brought to your door."],
  ["Catering", "Food for events, offices and celebrations."],
] as const

export type WalkIn = { src: string; poster?: string; caption: string }

// Reserved for optional walk-in clips. Keep this explicitly typed so an empty
// list remains valid TypeScript. The current site uses the dedicated experience video.
export const walkIns: WalkIn[] = []

export const placePhotos = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85", label: "The dining room" },
  { src: "/images/Amala.jpg", label: "The food" },
  { src: "/images/ChickenChips.jpeg", label: "A plate worth sharing" },
  { src: "/images/Coconut-rice.jpg", label: "Made to enjoy" },
  { src: "/images/jollof-rice.jpg", label: "Fresh from the kitchen" },
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
