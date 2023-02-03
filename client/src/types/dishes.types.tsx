import {ReactElement} from "react";

export type Dish = {
  id: number | string,
  name: string,
  category: string,
  preparationTime: string,
  recipe: Recipe,
  image: string
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