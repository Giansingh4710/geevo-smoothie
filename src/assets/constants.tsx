import bowl1 from "./pics/ai_bowl_1.jpeg";
import bowl2 from "./pics/ai_bowl_2.jpeg";
import bowl3 from "./pics/ai_bowl_3.jpeg";
import bowl4 from "./pics/ai_bowl_3.jpeg";

import { Smoothie } from "./assets/types";

export const SMOOTHIES: Smoothie[] = [
  { pic: bowl1, name:"Tropical Turmeric Bliss", description: "A refreshing blend of mango, pineapple, and banana, spiced with a hint of turmeric and ginger, and perfectly balanced with creamy coconut milk for a tropical escape in every sip." },
  { pic: bowl2, name:"Berry Basil Lemonade", description: "This smoothie combines the sweetness of blueberries and strawberries with the zesty brightness of lemon juice and the herbal freshness of basil, creating a refreshing and unique twist on lemonade." },
  { pic: bowl3, name:"Cocoa Avocado Dream", description: "Indulge in the rich, velvety texture of avocado paired with the deep, chocolatey taste of cacao powder, sweetened by banana and complemented by almond butter and coconut water." },
  { pic: bowl4, name:"Spiced Pumpkin Delight", description: "Embrace autumnal flavors with creamy pumpkin puree blended with cinnamon, nutmeg, banana, and almond milk, lightly sweetened with honey for a cozy, spiced treat." },
  { pic: bowl4, name:"Cucumber Mint Refresher", description: "This invigorating smoothie combines crisp cucumber with cool mint and a splash of lime, rounded out with hydrating coconut water and a touch of honey for a revitalizing, thirst-quenching experience." },
  { pic: bowl4, name:"Beetroot Berry Boost", description: "Earthy beets meet the tangy sweetness of raspberries and blueberries in this vibrant smoothie, made extra creamy with Greek yogurt and brightened by a splash of orange juice." },
  { pic: bowl4, name:"Coconut Matcha Energizer", description: "Matcha powder brings an energizing boost to this creamy coconut milk smoothie, complemented by the smooth sweetness of banana, fresh spinach, and a dash of vanilla protein powder for added fuel." },
  { pic: bowl4, name:"Carrot Ginger Zing", description: "Carrot and ginger team up with sweet pineapple and tangy orange juice for a zesty, immune-boosting smoothie, made extra creamy with Greek yogurt." },
  { pic: bowl4, name:"Choco-Cherry Recovery", description: "Dark cherries and spinach are paired with crunchy cocoa nibs and almond milk in this recovery smoothie, with a scoop of protein powder for post-workout nourishment." },
  { pic: bowl4, name:"Apple Pie Smoothie", description: "A wholesome blend of green apple, oats, cinnamon, and almond milk recreates the comforting flavors of apple pie, with a touch of vanilla extract to enhance the sweet, nostalgic taste." },
];

export enum Section {
  Home = "Home",
  Smoothies = "Smoothies",
  About = "About",
  Location = "Location",
  Contact = "Contact",
}
