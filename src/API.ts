import { generateRandomNumber } from "./utils";

export type Meal = {
  dateModified: string | null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string | null;
  strYoutube: string;

}


const searchCategories = async (category: string) => {
  const categoryEndpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const categoryList = await (await fetch(categoryEndpoint)).json();

  const randomIndex = generateRandomNumber(categoryList.meals?.length);

  const randomMealID = categoryList.meals[randomIndex].idMeal;

  const finalEndpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealID}`;

  return finalEndpoint;

}

export const findRandomRecipe = async (category: string) => {
  const endpoint = await searchCategories(category);

  const data = await (await fetch(endpoint)).json();

  return data.meals.map((meal: Meal) => (
    {
      name: meal.strMeal,
      image: meal.strMealThumb,
      origin: meal.strArea,
      category: meal.strCategory,
      source: meal.strSource,
      youtube: meal.strYoutube,
      instructions: meal.strInstructions,
      ingredients: [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
      ].filter(Boolean),
      measurements: [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20
      ].filter(Boolean)
    }
  ))

}