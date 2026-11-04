// ALL REUSABLE IMAGE CONTROLS LIVE HERE.
// Nigerian cuisine-focused Unsplash imagery for the restaurant demo.
//
// For the final client version, these can be replaced with locally hosted
// restaurant photography without touching any components.

export const images = {
  dishes: {
    // Starters
    puffPuff: "/images/puff-puff.jpg",

    moiMoi: "/images/moi-moi.jpg",

    pepperedGizzard: "/images/pepper-gizzard.jpg",

    suya: "/images/suya.jpg",

    // Rice
    jollof: "/images/jollof-rice.jpg",

    friedRice: "/images/fried-rice.jpg",

    coconutRice: "/images/Coconut-rice.jpg",

    ofada: "/images/Ofada-rice.jpg",

    // Grill
    asun: "/images/asun.jpg",

    pepperedChicken: "/images/peppered-chicken.jpg",

    grilledCroaker: "/images/grilledCoaker.jpg",

    // Soups
    egusi: "/images/egusi-4.jpg",

    afang: "/images/afang.jpg",

    efoRiro: "/images/efo-5.jpg",

    ogbono: "/images/ogbono.jpg",

    // Swallows
    poundedYam: "/images/poundedYam.jpg",

    eba: "/images/eba.jpg",

    amala: "/images/Amala.jpg",

    semo: "/images/Semovita.jpg",

    // Seafood
    seafoodPepperSoup: "/images/seaFoods.jpg",

    catfishPepperSoup: "/images/Catfish.jpg",

    prawns: "/images/prawns.jpg",

    coconutSeafoodRice: "/images/coconutSeafoodRice.jpg",

    // Street food
    shawarma: "/public/images/Sharwama.jpeg",

    chickenChips: "/public/images/ChickenChips.jpeg",

    dodoEggs: "/public/images/dodoEgg.jpeg",

    yamEgg: "/public/images/yamEgg.jpeg",

    // Desserts
    chinChin: "/public/images/chinChin.jpeg",

    puffPuffDessert: "/public/images/CreamyPuff.jpeg",

    plantainDessert: "/public/images/plaintain.jpeg",

    coconutCake:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85",

    // Drinks
    zobo: "/public/images/Zobo.jpeg",

    chapman:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1600&q=85",

    gingerPineapple:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1600&q=85",

    palmWine: "/public/images/PalmWine.jpeg",
  },

  sections: {
    story: "/images/unnamed.png",

    dining:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",

    fire: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=85",

    ingredients:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85",

    chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=85",

    plated:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85",

    bar: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",

    evening:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=85",

    exterior:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
  },

  hero: {
    src: "/videos/hero.mp4" as string | null,
    poster: "/images/Amala.jpg" as string | null,
    mobileSrc: "/videos/amala_smooth_scroll.mp4" as string | null,
    mobilePoster: "/images/Amala.jpg" as string | null,
  },
} as const;
