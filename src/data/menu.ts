// ALL MENU CONTENT + PRICES + IMAGE ASSIGNMENTS LIVE HERE.
// Add/remove categories and dishes without touching the Menu component.

import { images } from "./images";

export type Dish = {
  name: string;
  price: number;
  desc: string;
  tags: string[];
  image: string;
  addon?: { label: string; price: number };
};

const item = (
  name: string,
  price: number,
  desc: string,
  tags: string[],
  image: string,
  addon?: Dish["addon"],
): Dish => ({ name, price, desc, tags, image, addon });

export const menu: Record<string, Dish[]> = {
  "To Begin": [
    item(
      "Puff-Puff",
      4500,
      "Warm golden dough, lightly spiced and finished with a delicate dusting of sugar.",
      ["Vegetarian", "Classic"],
      images.dishes.puffPuff,
    ),

    item(
      "Moi Moi",
      6500,
      "Silky steamed bean pudding with smoked peppers, caramelised onions and soft boiled egg.",
      ["Traditional", "Protein"],
      images.dishes.moiMoi,
    ),

    item(
      "Peppered Gizzard",
      8500,
      "Tender fried gizzard tossed in a rich Nigerian pepper sauce with sweet onions.",
      ["Spicy", "Small plate"],
      images.dishes.pepperedGizzard,
    ),

    item(
      "Suya Skewers",
      12500,
      "Charcoal-grilled beef skewers coated in house suya spice, onion and fresh tomato.",
      ["Charcoal grilled", "Signature"],
      images.dishes.suya,
      { label: "Extra yaji", price: 2000 },
    ),
  ],

  "The Classics": [
    item(
      "Jollof Rice",
      9500,
      "Long-grain rice slowly cooked in a rich tomato and pepper base with aromatic Nigerian spices.",
      ["Nigerian classic", "Signature"],
      images.dishes.jollof,
      { label: "Fried plantain", price: 2500 },
    ),

    item(
      "Fried Rice",
      10000,
      "Fragrant Nigerian fried rice with vegetables, sweet peppers and tender pieces of chicken.",
      ["Classic", "Popular"],
      images.dishes.friedRice,
    ),

    item(
      "Coconut Rice",
      11000,
      "Fragrant rice cooked with coconut, peppers and aromatic spices for a rich coastal finish.",
      ["Aromatic", "House special"],
      images.dishes.coconutRice,
    ),

    item(
      "Ofada Rice & Ayamase",
      12500,
      "Locally sourced Ofada rice served with smoky green pepper sauce and assorted beef.",
      ["Traditional", "Spicy"],
      images.dishes.ofada,
      { label: "Extra assorted meat", price: 3500 },
    ),
  ],

  "From The Grill": [
    item(
      "Suya",
      12500,
      "Thinly sliced beef grilled over charcoal and finished with house-blended yaji, onions and tomatoes.",
      ["Charcoal grilled", "Signature"],
      images.dishes.suya,
      { label: "Extra yaji", price: 2000 },
    ),

    item(
      "Asun",
      14000,
      "Smoky grilled goat meat tossed with fiery peppers, onions and a touch of citrus.",
      ["Spicy", "Charcoal grilled"],
      images.dishes.asun,
    ),

    item(
      "Peppered Chicken",
      12000,
      "Charcoal-grilled chicken finished in a glossy Nigerian pepper sauce with caramelised onions.",
      ["Spicy", "Grilled"],
      images.dishes.pepperedChicken,
    ),

    item(
      "Grilled Croaker",
      18000,
      "Whole croaker seasoned with aromatic spices, grilled over flame and served with fresh pepper sauce.",
      ["Seafood", "Charcoal grilled"],
      images.dishes.grilledCroaker,
      { label: "Garlic butter", price: 2500 },
    ),
  ],

  "The Pot": [
    item(
      "Egusi Soup",
      11000,
      "Ground melon seeds cooked with leafy greens, peppers and slow-braised meat in a rich traditional broth.",
      ["Traditional", "Rich"],
      images.dishes.egusi,
    ),

    item(
      "Afang Soup",
      12000,
      "A deeply flavoured Calabar-style soup of afang leaves, waterleaf and tender assorted meats.",
      ["Traditional", "Calabar"],
      images.dishes.afang,
    ),

    item(
      "Efo Riro",
      10500,
      "Slow-cooked spinach and pepper stew with palm oil, smoked fish and tender pieces of meat.",
      ["Yoruba classic", "Rich"],
      images.dishes.efoRiro,
    ),

    item(
      "Ogbono Soup",
      11000,
      "Silky ground ogbono soup enriched with palm oil, leafy greens and slow-cooked assorted meat.",
      ["Traditional", "House classic"],
      images.dishes.ogbono,
    ),
  ],

  Swallows: [
    item(
      "Pounded Yam",
      4000,
      "Smooth, hand-pounded yam with a soft, elastic texture designed for rich Nigerian soups.",
      ["Traditional", "Classic"],
      images.dishes.poundedYam,
    ),

    item(
      "Eba",
      3500,
      "Soft garri swallow prepared fresh and served warm alongside your choice of soup.",
      ["Traditional", "Classic"],
      images.dishes.eba,
    ),

    item(
      "Amala",
      3500,
      "Silky yam-flour swallow with the deep earthy character of a true Yoruba classic.",
      ["Yoruba classic", "Traditional"],
      images.dishes.amala,
    ),

    item(
      "Semo",
      4000,
      "Smooth semolina swallow, freshly prepared to pair beautifully with rich Nigerian soups.",
      ["Traditional"],
      images.dishes.semo,
    ),
  ],

  "Coastal Table": [
    item(
      "Seafood Pepper Soup",
      16000,
      "Aromatic broth filled with fresh seafood, scent leaf, peppers and warming Nigerian spices.",
      ["Seafood", "Spicy"],
      images.dishes.seafoodPepperSoup,
    ),

    item(
      "Catfish Pepper Soup",
      14000,
      "Fresh catfish simmered in a fragrant pepper soup broth with aromatic herbs and spices.",
      ["Traditional", "Spicy"],
      images.dishes.catfishPepperSoup,
    ),

    item(
      "Grilled Prawns",
      18000,
      "Large prawns grilled over charcoal with garlic, chilli, herbs and a bright citrus finish.",
      ["Seafood", "Grilled"],
      images.dishes.prawns,
    ),

    item(
      "Coconut Seafood Rice",
      18000,
      "Fragrant coconut rice served with prawns, calamari and grilled fish in a light pepper sauce.",
      ["Seafood", "House special"],
      images.dishes.coconutSeafoodRice,
    ),
  ],

  "Street Classics": [
    item(
      "Nigerian Shawarma",
      8500,
      "Grilled chicken, cabbage, peppers and creamy house sauce wrapped in warm flatbread.",
      ["Popular", "Street food"],
      images.dishes.shawarma,
    ),

    item(
      "Chicken & Chips",
      9000,
      "Crispy seasoned chicken with golden chips, fresh slaw and house pepper sauce.",
      ["Comfort food", "Popular"],
      images.dishes.chickenChips,
    ),

    item(
      "Dodo & Eggs",
      7000,
      "Sweet fried plantain served with soft scrambled eggs, peppers and caramelised onions.",
      ["Breakfast", "Classic"],
      images.dishes.dodoEggs,
    ),

    item(
      "Yam & Egg Sauce",
      7500,
      "Golden fried yam served with a rich tomato, pepper and egg sauce.",
      ["Comfort food", "Classic"],
      images.dishes.yamEgg,
    ),
  ],

  Dessert: [
    item(
      "Chin Chin",
      3500,
      "Crisp golden pastry bites with a delicate sweetness and buttery finish.",
      ["Classic", "Sweet"],
      images.dishes.chinChin,
    ),

    item(
      "Puff-Puff & Cream",
      5500,
      "Warm Nigerian puff-puff served with lightly whipped vanilla cream and caramel.",
      ["Sweet", "House dessert"],
      images.dishes.puffPuffDessert,
    ),

    item(
      "Plantain & Caramel",
      6500,
      "Caramelised ripe plantain with vanilla cream, toasted peanuts and warm caramel.",
      ["House dessert", "Signature"],
      images.dishes.plantainDessert,
    ),

    item(
      "Coconut Cake",
      6000,
      "Soft coconut cake with toasted coconut, vanilla cream and a light citrus glaze.",
      ["House dessert", "Sweet"],
      images.dishes.coconutCake,
    ),
  ],

  Drinks: [
    item(
      "Zobo",
      3500,
      "Chilled hibiscus drink infused with pineapple, ginger and aromatic Nigerian spices.",
      ["Non-alcoholic", "House made"],
      images.dishes.zobo,
    ),

    item(
      "Chapman",
      5500,
      "Classic Nigerian cocktail-style cooler with citrus, grenadine, bitters and sparkling soda.",
      ["Classic", "Refreshing"],
      images.dishes.chapman,
    ),

    item(
      "Ginger & Pineapple",
      5000,
      "Fresh pineapple juice brightened with Nigerian ginger and a touch of lime.",
      ["Fresh", "Non-alcoholic"],
      images.dishes.gingerPineapple,
    ),

    item(
      "Palm Wine",
      5000,
      "Fresh, naturally sweet palm wine served chilled for a distinctly Nigerian experience.",
      ["Traditional", "Local"],
      images.dishes.palmWine,
    ),
  ],
};
