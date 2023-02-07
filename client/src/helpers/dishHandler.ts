import axios from "axios";
import {Dish} from "../types/dishes.types";

export const dishHandler = {
  fetchDishesCategories: async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    return response.data.meals.map((responseItem: any) => responseItem.strCategory as string) as string[];
  },
  fetchAllDishesByCategory: async (category: string) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.data.meals;
  },
  fetchDishById: async (id: number) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.data.meals;
  },
  fetchAllDishes: async (categories: string[]) => {
    let response = categories.map(async category => await dishHandler.fetchAllDishesByCategory(category))
    let promises = await Promise.all(response);
    let dishes = promises.flatMap(dish => dish);
    response = dishes.map(async dish => await dishHandler.fetchDishById(dish.idMeal));
    promises = await Promise.all(response);
    dishes = promises.flatMap(dish => dish).map(dish => dishHandler.castToDishType(dish));
    return dishes;
  },
  castToDishType: (object: any): Dish | undefined => {
    let dish: Dish = {
      id: object.idMeal,
      name: object.strMeal,
      area: object.strArea,
      category: object.strCategory,
      drinkAlternate: object.strDrinkAlternate,
      tags: object.strTags?.split(','),
      youTubeLink: object.strYouTube,
      image: object.strMealThumb,
      preparationTime: "2h. 15min.",
      recipe: {
        instructions: object.strInstructions,
        ingredients: []
      },
      dateModified: new Date()
    }

    for (const [key, value] of Object.entries(object)) {
      if (key.includes('strIngredient')) {
        const ingredientId = key.split("strIngredient")[1];
        if (object[key] && object[key].trim() !== '') {
          dish.recipe.ingredients.push({
            name: object[key],
            measure: object[`strMeasure${ingredientId}`]
          })
        }
      }
    }
    return dish;
  },
  fetchAll: async () => {
    return await dishHandler.fetchDishesCategories()
      .then(async categories => await dishHandler.fetchAllDishes(categories) as Dish[])
      .catch(console.error)
  },
  fetchByNumber: async (number: number) => {
    return await dishHandler.fetchDishesCategories()
      .then(async categories => (await dishHandler.fetchAllDishes(categories)).slice(0, number) as Dish[])
      .catch(console.error)
  }
}