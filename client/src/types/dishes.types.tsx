import {ReactElement} from "react";

export type Dish = {
  name: string,
  category: string,
  preparationComplexity: number,
  recipe: Recipe
}

export type Recipe = {
  items: string[]
}

export type DishesListItemPropsType = {
  dish: Dish
}

export type DishesListPropsType = {
  children: ReactElement<Dish> | ReactElement<Dish>[] | undefined
}