import mango_tango from "./pics/smoothies/mango_tango.jpeg";
import berry_bliss_banana from "./pics/smoothies/berry_bliss_banana.jpeg";
import the_green_goddess from "./pics/smoothies/the_green_goddess.jpeg";
import blueberry_delight from "./pics/smoothies/blueberry_delight.jpeg";
import hanna_banana from "./pics/smoothies/hanna_banana.jpeg";

import flax_seeds from "./pics/add_ons/flax_seeds.jpg";
import chia_seeds from "./pics/add_ons/chia_seeds.jpg";
import hemp_seeds from "./pics/add_ons/hemp_seeds.jpg";
import protein_powder from "./pics/add_ons/portein_powder.jpg";

import vanilla_milkshake from "./pics//milkshakes/vanilla_milkshake.jpg";
import chocolate_milkshake from "./pics/milkshakes/chocolate_milkshake.jpg";
import cookies_cream_milkshake from "./pics/milkshakes/cookies_cream_milkshake.jpg";
import strawberry_milkshake from "./pics/milkshakes/strawberry_milkshake.jpg";

export interface MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}

export interface Smoothie extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}
export const SMOOTHIES: Smoothie[] = [
  {
    pic: mango_tango,
    name: "Mango Tango",
    description:
      "A tropical blend of mango, pineapple, and strawberry with creamy Greek yogurt and a touch of agave for natural sweetness. Refreshing and delicious in every sip!",
    price: "$6.95 (S) / $7.95 (L)",
  },
  {
    pic: berry_bliss_banana,
    name: "Berry Bliss Banana",
    description:
      "A delightful mix of sweet strawberries, ripe banana, creamy Greek yogurt, and a hint of agave. Smooth, satisfying, and packed with flavor!",
    price: "$6.95 (S) / $7.95 (L)",
  },
  {
    pic: the_green_goddess,
    name: "The Green Goddess",
    description:
      "A vibrant blend of spinach, avocado, pineapple, and banana with creamy Greek yogurt and a touch of agave. Nutrient-packed and refreshingly delicious!",
    price: "$6.95 (S) / $7.95 (L)",
  },
  {
    pic: blueberry_delight,
    name: "Blueberry Delight",
    description:
      "A smooth blend of blueberries, banana, spinach, and apple juice, balanced with creamy Greek yogurt and a hint of agave. A tasty, antioxidant-rich treat!",
    price: "$6.95 (S) / $7.95 (L)",
  },
  {
    pic: hanna_banana,
    name: "Hannah Banana",
    description:
      "A creamy mix of banana, peanut butter, protein powder, and Greek yogurt, lightly sweetened with agave. Perfectly packed with flavor and protein!",
    price: "$6.95 (S) / $7.95 (L)",
  },
];

export interface AddOn extends MenuItem {
  name: string;
  pic: string;
  description: string;
  price: string;
};
export const ADDONS: AddOn[] = [
  {
    pic: chia_seeds,
    name: "Chia Seeds",
    description:
      "These seeds are full of protein, fiber, omega-3 fatty acids, and other minerals. They are flavorless, so they don't change the taste but give great benefits.",
    price: "$1.50",
  },
  {
    pic: flax_seeds,
    name: "Flax Seeds",
    description:
      "Great source of fiber, omega-3 fatty acids, and lignans, which may have anti-cancer properties. They also contain vitamins and minerals like vitamin E, magnesium, and potassium.",
    price: "$2.00",
  },
  {
    pic: hemp_seeds,
    name: "Hemp Seeds",
    description:
      "These seeds are a complete protein and contain omega-3s, fiber, iron, and magnesium. They also have a mild, nutty flavor.",
    price: "$2.00",
  },
  {
    pic: protein_powder,
    name: "Protein Powder",
    description:
      "Protein powders are nutritional supplements that may help build muscle, repair tissue, and make enzymes and hormones. They can also aid in weight loss and help tone muscles.",
    price: "$1.50",
  },
];

export interface Milkshake extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
};
export const MILKSHAKES: Milkshake[] = [
  {
    pic: vanilla_milkshake,
    name: "Vanilla Milkshake",
    description:
      "A classic favorite made with rich and creamy vanilla ice cream, blended to perfection for a smooth and delicious treat.",
    price: "$4.99 (S) / $5.99 (L)",
  },
  {
    pic: chocolate_milkshake,
    name: "Chocolate Milkshake",
    description:
      "Indulgent and decadent, this milkshake is made with creamy chocolate ice cream for a rich, chocolatey delight.",
    price: "$4.99 (S) / $5.99 (L)",
  },
  {
    pic: cookies_cream_milkshake,
    name: "Cookies & Cream Milkshake",
    description:
      "A delightful blend of creamy vanilla ice cream and crunchy chocolate cookies, creating a perfect mix of smooth and crunchy textures.",
    price: "$4.99 (S) / $5.99 (L)",
  },
  {
    pic: strawberry_milkshake,
    name: "Strawberry Milkshake",
    description:
      "Sweet and refreshing, this milkshake is made with real strawberries and creamy ice cream for a fruity and flavorful drink.",
    price: "$4.99 (S) / $5.99 (L)",
  },
];

export enum PAGE_ENUM {
  home = "home",
  menu = "menu",
  about = "about",
  visitus = "visitus",
}
export type Page_obj = { title: string; path: string };
export const PAGES: Record<PAGE_ENUM, Page_obj> = {
  home: { title: "Home", path: "/" },
  menu: { title: "Menu", path: "/menu" },
  about: { title: "About", path: "/about" },
  visitus: { title: "Visit Us", path: "/visitus" },
} as const;
