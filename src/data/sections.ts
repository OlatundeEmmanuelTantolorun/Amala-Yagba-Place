// Section copy and visual controls live here.
// Change headings, cards and gallery content without editing components.

export const craft = {
  heading: "Crafted by fire.",
  cards: [
    ["Smoke", "Fruitwood and vine cuttings, burned slowly, until the air itself seasons the plate."],
    ["Heat", "Three zones of embers, from a hard sear to a patient rest."],
    ["Craft", "Every cut, turn and rest is judged by hand and by eye."],
    ["Produce", "Seasonal ingredients, chosen for what fire can do to them."],
  ],
} as const

export const gallery = [
  { label: "Dining room", imageKey: "dining" },
  { label: "Fire", imageKey: "fire" },
  { label: "Ingredients", imageKey: "ingredients" },
  { label: "Chef", imageKey: "chef" },
  { label: "Plated", imageKey: "plated" },
  { label: "Bar", imageKey: "bar" },
  { label: "Evening", imageKey: "evening" },
  { label: "Exterior", imageKey: "exterior" },
] as const
