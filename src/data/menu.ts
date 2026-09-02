import chicken from "@/assets/menu-chicken.jpg";
import burger from "@/assets/menu-burger.jpg";
import potatoes from "@/assets/menu-potatoes.jpg";
import salad from "@/assets/menu-salad.jpg";
import drinks from "@/assets/menu-drinks.jpg";

/**
 * PLACEHOLDER CONTENT — replace with North Rotisserie's real menu.
 * Item names, descriptions and prices below are examples only.
 * Prices are intentionally not invented: PRICE_PLACEHOLDER is shown everywhere.
 */
export const PRICE_PLACEHOLDER = "Price — Contact restaurant";

export type MenuItem = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const RESTAURANT = {
  name: "North Rotisserie",
  street: "19 Rue Imam Abou Hanifa",
  city: "La Marsa 2078",
  country: "Tunisia",
  phone: "+216 26 164 204",
  phoneHref: "tel:+21626164204",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=19+Rue+Imam+Abou+Hanifa%2C+La+Marsa+2078%2C+Tunisia",
} as const;

export const MENU: MenuCategory[] = [
  {
    id: "rotisserie",
    title: "Rotisserie",
    blurb: "Slow-roasted over open heat, served hot off the spit.",
    items: [
      {
        name: "Whole Rotisserie Chicken",
        description: "Roasted whole, crisp skin, tender inside. Served with bread and sauce.",
        image: chicken,
        imageAlt: "Roasted rotisserie chicken on a plate",
      },
      {
        name: "Half Chicken Plate",
        description: "Half a chicken with a side of your choice and house sauce.",
        image: chicken,
        imageAlt: "Half rotisserie chicken plate",
      },
      {
        name: "Grilled Chicken Skewers",
        description: "Marinated pieces grilled over flame, finished with lemon.",
        image: chicken,
        imageAlt: "Grilled chicken skewers",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Sandwiches",
    blurb: "Generous, hand-built, made to order.",
    items: [
      {
        name: "North Chicken Burger",
        description: "Grilled chicken, fresh vegetables, house sauce, toasted bun.",
        image: burger,
        imageAlt: "Grilled chicken burger",
      },
      {
        name: "Rotisserie Chicken Sandwich",
        description: "Pulled roast chicken in warm bread with salad and sauce.",
        image: burger,
        imageAlt: "Rotisserie chicken sandwich",
      },
      {
        name: "Chicken Wrap",
        description: "Grilled chicken rolled with crisp salad and creamy dressing.",
        image: burger,
        imageAlt: "Chicken wrap",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    blurb: "The parts everyone fights over.",
    items: [
      {
        name: "Crispy Roast Potatoes",
        description: "Golden wedges roasted under the chicken, seasoned with herbs.",
        image: potatoes,
        imageAlt: "Crispy roasted potato wedges",
      },
      {
        name: "French Fries",
        description: "Hot, salted, and best shared.",
        image: potatoes,
        imageAlt: "French fries",
      },
      {
        name: "Grilled Vegetables",
        description: "Seasonal vegetables cooked over the grill with olive oil.",
        image: potatoes,
        imageAlt: "Grilled vegetables",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    blurb: "Fresh, simple, cut daily.",
    items: [
      {
        name: "Mediterranean Salad",
        description: "Tomato, cucumber, olives and herbs with olive oil.",
        image: salad,
        imageAlt: "Mediterranean salad bowl",
      },
      {
        name: "Green Salad",
        description: "Crisp leaves with a light house dressing.",
        image: salad,
        imageAlt: "Green salad bowl",
      },
      {
        name: "Chicken Salad Bowl",
        description: "Grilled chicken over fresh salad with dressing on the side.",
        image: salad,
        imageAlt: "Chicken salad bowl",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    blurb: "Cold and simple.",
    items: [
      {
        name: "Homemade Lemonade",
        description: "Fresh lemon, lightly sweetened, served over ice.",
        image: drinks,
        imageAlt: "Glass of homemade lemonade",
      },
      {
        name: "Soft Drinks",
        description: "Chilled bottles and cans.",
        image: drinks,
        imageAlt: "Cold soft drinks",
      },
      {
        name: "Still & Sparkling Water",
        description: "Served cold.",
        image: drinks,
        imageAlt: "Water glasses",
      },
    ],
  },
];
