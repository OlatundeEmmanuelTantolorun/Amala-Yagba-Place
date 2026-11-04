// ALL RESTAURANT-BRAND CONTROLS LIVE HERE.
export const site = {
  name: "Amala Yagba Place",
  shortName: ["Amala", "Yagba"],
  logo: null as string | null, // e.g. "/images/logo.png" — when set, replaces the text wordmark in the nav
  edition: "Place · Lokoja",
  tagline: "Good amala. Proper soup. Made with care.",
  sub: "Come hungry. Sit down, settle in and eat properly.",
  description: "Amala Yagba Place serves amala and Nigerian favourites in Lokoja, with dine-in, takeaway, home delivery and catering.",
  storyHeading: "Come as you are.",
  story: "A place built around good food and good company. Pull a chair, order your favourite, and take your time. Dine in, take it home, or let us bring it to you.",

  navigation: { menuLabel: "Menu", reserveLabel: "Find us" },
  labels: {
    location: "Location", directions: "Directions", hours: "Hours", contact: "Contact", follow: "Follow",
    reserveOnWhatsapp: "Order or book on WhatsApp", exploreMenu: "Explore the menu",
    placeholderPhotography: "", backToMenu: "Back to menu", orderOnWhatsapp: "Order on WhatsApp",
  },
  visit: {
    heading: "Your table awaits.",
    address: "Hassan Usman Katsina Way, beside Walvicola Filling Station, Lokoja 260001, Kogi.",
    phone: "07036065676",
    whatsapp: "+2347036065676", // international format, digits only, e.g. 2348012345678
    directions: "https://www.google.com/maps/dir//Amala+Yagba+Place,+Hassan+Usman+Katsina+Way,+beside+Walvicola+Filling+Station,+Lokoja+260001,+Kogi/@9.0574165,7.5138956,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104f5f53efb1cccb:0xefb15ed039c95308!2m2!1d6.6952928!2d7.8075908?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D",
    mapEmbed: "https://www.google.com/maps?q=7.8075908,6.6952928&z=16&output=embed",
    hours: [
      ["Wednesday", "8–10 pm"],
      ["Thursday", "8 am–10 pm"],
      ["Friday", "8 am–10 pm"],
      ["Saturday", "8 am–10:30 pm"],
      ["Sunday", "8:30 am–10 pm"],
      ["Monday", "8 am–10 pm"],
      ["Tuesday", "8 am–10 pm"],
    ],
  },
  feedbackEmail: "", // Set the restaurant feedback inbox to enable email-based feedback.
  social: { TikTok: "https://www.tiktok.com/@fareedaesq", Instagram: "#", Facebook: "#" },
  currency: "₦",
  seo: { title: "Amala Yagba Place — Lokoja", description: "Amala and Nigerian favourites in Lokoja. Dine-in, takeaway, delivery and catering.", location: "Lokoja" },
  footer: "Website concept prepared for Amala Yagba Place.",
} as const
