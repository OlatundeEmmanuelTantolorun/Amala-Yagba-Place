// Services, walk-in videos, place photos and testimonials.
// Add files to public/videos/ and public/images/place/ and list them here.
// Any file that is missing is hidden automatically.

export const services = [
  ["Dine-in", "Sit down, settle in and enjoy your meal."],
  ["Takeaway", "Packed fresh, ready when you are."],
  ["Home delivery", "Your favourites, brought to your door."],
  ["Catering", "Food for events, offices and celebrations."],
] as const

export const walkIns = [
  { src: "/videos/walkin-1.mp4", poster: "/images/place/walkin-1.jpg", caption: "Walking in" },
  { src: "/videos/walkin-2.mp4", poster: "/images/place/walkin-2.jpg", caption: "The first look" },
  { src: "/videos/walkin-3.mp4", poster: "/images/place/walkin-3.jpg", caption: "At the table" },
]

export const placePhotos = [
  { src: "/images/place/place-1.jpg", label: "The sign" },
  { src: "/images/place/place-2.jpg", label: "Inside" },
  { src: "/images/place/place-3.jpg", label: "The food" },
  { src: "/images/place/place-4.jpg", label: "Outside" },
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
