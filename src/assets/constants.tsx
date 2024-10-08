import mango_tango from "../../public//smoothies/mango_tango.jpeg";
import berry_bliss_banana from "../../public/smoothies/berry_bliss_banana.jpeg";
import the_green_goddess from "../../public/smoothies/the_green_goddess.jpeg";
import blueberry_delight from "../../public/smoothies/blueberry_delight.jpeg";
import hanna_banana from "../../public/smoothies/hanna_banana.jpeg";

import flax_seeds from "../../public/add_ons/flax_seeds.jpg";
import chia_seeds from "../../public/add_ons/chia_seeds.jpg";
import hemp_seeds from "../../public/add_ons/hemp_seeds.jpg";
import protein_powder from "../../public/add_ons/portein_powder.jpg";

import vanilla_milkshake from "../../public//milkshakes/vanilla_milkshake.jpg";
import chocolate_milkshake from "../../public/milkshakes/chocolate_milkshake.jpg";
import cookies_cream_milkshake from "../../public/milkshakes/cookies_cream_milkshake.jpg";
import strawberry_milkshake from "../../public/milkshakes/strawberry_milkshake.jpg";

import { Smoothie } from "./assets/types";
export const SMOOTHIES: Smoothie[] = [
  {
    pic: mango_tango,
    name: "Mango Tango",
    description:
      "A tropical blend of mango, pineapple, and strawberry with creamy Greek yogurt and a touch of agave for natural sweetness. Refreshing and delicious in every sip!",
  },
  {
    pic: berry_bliss_banana,
    name: "Berry Bliss Banana",
    description:
      "A delightful mix of sweet strawberries, ripe banana, creamy Greek yogurt, and a hint of agave. Smooth, satisfying, and packed with flavor!",
  },
  {
    pic: the_green_goddess,
    name: "The Green Goddess",
    description:
      "A vibrant blend of spinach, avocado, pineapple, and banana with creamy Greek yogurt and a touch of agave. Nutrient-packed and refreshingly delicious!",
  },
  {
    pic: blueberry_delight,
    name: "Blueberry Delight",
    description:
      "A smooth blend of blueberries, banana, spinach, and apple juice, balanced with creamy Greek yogurt and a hint of agave. A tasty, antioxidant-rich treat!",
  },
  {
    pic: hanna_banana,
    name: "Hannah Banana",
    description:
      "A creamy mix of banana, peanut butter, protein powder, and Greek yogurt, lightly sweetened with agave. Perfectly packed with flavor and protein!",
  },
];


type AddOn = { name: string; pic: string };
export const ADDONS: AddOn[] = [
  { pic: flax_seeds, name: "Flax Seeds" },
  { pic: chia_seeds, name: "Chia Seeds" },
  { pic: hemp_seeds, name: "Hemp Seeds" },
  { pic: protein_powder, name: "Protein Powder" },
];

type Milkshake = { pic: string; name: string };
export const MILKSHAKES: Milkshake[] = [
  {
    pic: vanilla_milkshake,
    name: "Vanilla Milkshake",
  },
  {
    pic: chocolate_milkshake,
    name: "Chocolate Milkshake",
  },
  {
    pic: cookies_cream_milkshake,
    name: "Cookies & Cream Milkshake",
  },
  {
    pic: strawberry_milkshake,
    name: "Strawberry Milkshake",
  },
];

export enum Section {
  Home = "Home",
  Smoothies = "Smoothies",
  TheSmoothie = "TheSmoothie",
  About = "About",
  Location = "Location",
  Contact = "Contact",
}
