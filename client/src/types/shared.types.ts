import {Dish} from "./dishes.types";

export type PaginationStateType = {
  activePage: number,
  numberOfPages: number,
  visibleButtons: PaginationButtonType[],
}

export type PaginationButtonType = {
  name: string,
  number?: number
}

export type PaginationPropsType = {
  itemsPerPage: number,
  numberOfButtons: number,
  items: any[],
  updatePage: (page: number, items: Dish[]) => any
}

export type HomePageStateType = {
  isLoaded: boolean
}