import {FC} from "react";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";

export const PopularDishesSection: FC = () => {
  return (
    <section className={"popular-dishes-section"}>
      <h2 className={'section-heading'}>Popular dishes</h2>
      <div className={"section-content"}>
        <DishesList>
          <DishesListItem dish={{id: 1, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 2, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 3, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 4, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 5, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 6, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
          <DishesListItem dish={{id: 7, name: "Смажене москальське дитинча", image: "header-image.jpg", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
        </DishesList>
      </div>
    </section>
  );
}