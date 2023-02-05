export type Recipe = {
  name: string;
  image: string;
  origin: string;
  category: string;
  source: string;
  youtube: string;
  instructions: string;
  ingredients: string[];
  measurements: string[];
 }

 export enum Categories {
  SEAFOOD = 'Seafood',
  BEEF = 'Beef',
  CHICKEN = 'Chicken',
  DESSERT = 'Dessert',
  LAMB = 'Lamb',
  PASTA = 'Pasta',
  PORK = 'Pork',
  SIDE = 'Side',
  STARTER = 'Starter',
  BREAKFAST = 'Breakfast',
  VEGAN = 'Vegan',
  VEGETARIAN = 'Vegetarian'
};

export const categories = [
  { value: Categories.SEAFOOD, text: 'Seafood 🐟' },
  { value: Categories.BEEF, text: 'Beef 🥩' },
  { value: Categories.CHICKEN, text: 'Chicken 🐔' },
  { value: Categories.DESSERT, text: 'Dessert 🧁' },
  { value: Categories.LAMB, text: 'Lamb 🍖' },
  { value: Categories.PASTA, text: 'Pasta 🍝' },
  { value: Categories.PORK, text: 'Pork 🐷' },
  { value: Categories.SIDE, text: 'Side 🍟' },
  { value: Categories.STARTER, text: 'Starter 🧆' },
  { value: Categories.BREAKFAST, text: 'Breakfast 🍳' },
  { value: Categories.VEGAN, text: 'Vegan 🌿' },
  { value: Categories.VEGETARIAN, text: 'Vegetarian 🥗' }
];