import mango_tango from "./pics/smoothies/mango_tango.jpeg";
import berry_bliss_banana from "./pics/smoothies/berry_bliss_banana.jpeg";
import the_green_goddess from "./pics/smoothies/the_green_goddess.jpeg";
import blueberry_delight from "./pics/smoothies/blueberry_delight.jpeg";
import hanna_banana from "./pics/smoothies/hanna_banana.jpeg";

import flax_seeds from "./pics/add_ons/flax_seeds.jpg";
import chia_seeds from "./pics/add_ons/chia_seeds.jpg";
import hemp_seeds from "./pics/add_ons/hemp_seeds.jpg";
import chocolate_protein_powder from "./pics/add_ons/chocolate_protein_powder.jpg";
import vanilla_protein_powder from "./pics/add_ons/vanilla_protein_powder.jpg";
import herbo_protein1 from "./pics/add_ons/herbo_protein_1.jpg";

import almond_milk from "./pics/options/almond_milk.png";
import oatmilk from "./pics/options/oatmilk.png";

import vanilla_milkshake from "./pics/milkshakes/vanilla_milkshake.jpg";
import chocolate_milkshake from "./pics/milkshakes/chocolate_milkshake.jpg";
import cookies_cream_milkshake from "./pics/milkshakes/cookies_cream_milkshake.jpg";
import strawberry_milkshake from "./pics/milkshakes/strawberry_milkshake.jpg";

import vanilla_coffee from "./pics/coffees/vanilla.jpg";
import sugarfree_vanilla_coffee from "./pics/coffees/sugar-free-vanilla.jpg";
import simple_syrup_coffee from "./pics/coffees/simple-syrup.jpg";
import pumpkin_spice_coffee from "./pics/coffees/pumpkin-spice.jpg";

import hot_chocolate from "./pics/specialitydrinks/hot-chocolate.jpg";

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
}
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
    pic: chocolate_protein_powder,
    name: "Chocolate Protein Powder",
    description:
      "Indulge in the rich taste of chocolate while nourishing your body with this premium protein powder. Formulated to support muscle growth, tissue repair, and overall wellness, this protein supplement also aids in weight management and muscle toning. Whether you're fueling a workout or simply boosting your daily nutrition, our Chocolate Protein Powder provides a delicious and effective solution for your fitness goals.",
    price: "$1.50",
  },
  {
    pic: vanilla_protein_powder,
    name: "Vanilla Protein Powder",
    description:
      "Experience the classic flavor of vanilla with our high-quality Vanilla Protein Powder. Designed to promote muscle development, enhance tissue recovery, and support overall health, this supplement is perfect for those seeking a nutritious boost. It also aids in weight management and muscle toning, making it an essential part of your fitness routine. A versatile and delicious way to enhance your daily intake of protein.",
    price: "$1.50",
  },
  {
    pic: herbo_protein1,
    name: "Herbo Protein",
    description:
      "Herbo Protein is a premium plant-based blend, offering a natural, wholesome source of protein. Ideal for vegans, vegetarians, or anyone looking to enhance their diet, this supplement helps boost energy, promote muscle recovery, and support a healthy lifestyle. Whether mixed into smoothies, coffee, or post-workout shakes, Herbo Protein provides the perfect balance of nutrition and flavor to fuel your day.",
    price: "$2.00",
  },
];

export interface Milkshake extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}
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

export interface Coffee extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}
export const COFFEES: Coffee[] = [
  {
    pic: vanilla_coffee,
    name: "Vanilla",
    description:
      "Smooth and creamy, with a rich vanilla flavor that perfectly balances the robust coffee base. A comforting classic for any time of day.",
    price: "$3.95 (10oz) / $4.75 (16oz)",
  },
  {
    pic: sugarfree_vanilla_coffee,
    name: "Sugar-Free Vanilla",
    description:
      "Indulge in the same velvety vanilla essence without the guilt. A sugar-free twist on a beloved favorite, perfect for those watching their sugar intake.",
    price: "$3.95 (10oz) / $4.75 (16oz)",
  },
  {
    pic: simple_syrup_coffee,
    name: "Simple Syrup",
    description:
      "Lightly sweetened with classic simple syrup, this coffee enhances the natural flavors of the brew for a smooth, subtle sweetness in every sip.",
    price: "$3.95 (10oz) / $4.75 (16oz)",
  },
  {
    pic: pumpkin_spice_coffee,
    name: "Pumpkin Spice",
    description:
      "A seasonal delight, blending warm notes of cinnamon, nutmeg, and cloves with a smooth coffee base. The perfect cozy drink for autumn.",
    price: "$3.95 (10oz) / $4.75 (16oz)",
  },
];

export interface Option extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}
export const OPTIONS: Option[] = [
  {
    pic: almond_milk,
    name: "Almond Milk",
    description:
      "Almond milk is a versatile, dairy-free alternative that can be seamlessly added to your coffees. With its light, nutty flavor and smooth texture, it’s the perfect substitute for regular milk, offering a delicious and creamy twist to your favorite beverages. Enjoy it as an add-on to enhance your drinks with a touch of almond goodness!",
    price: "$1.00",
  },
  {
    pic: oatmilk,
    name: "Oat Milk",
    description:
      "Oat milk is a deliciously smooth and creamy dairy-free option, perfect for adding to your coffees, smoothies, and milkshakes. Made from whole oats, it has a naturally sweet taste and is rich in fiber, making it a healthy and nutritious alternative to regular milk. Whether you're lactose-intolerant, vegan, or just looking for a new flavor, oat milk provides a satisfying and versatile choice for all your beverage needs.",
    price: "$1.00",
  },
];

export interface SpecialityDrink extends MenuItem {
  pic: string;
  name: string;
  description: string;
  price: string;
}
export const SPECIALITYDRINKS: Option[] = [
  {
    pic: hot_chocolate,
    name: "Hot Chocolate",
    description:
      "A rich, decadent hot chocolate made with premium cocoa and perfectly steamed milk. This cozy treat offers a creamy, velvety experience with a delightful balance of sweetness and chocolatey goodness. Perfect for warming up your day with a comforting sip!",
    price: "$2.50",
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
