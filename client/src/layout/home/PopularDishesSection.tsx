import {FC} from "react";
import {DishesSidebar} from "../shared/DishesSidebar";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";

export const PopularDishesSection: FC = () => {
  return (
    <section className={"recipes-section"}>
      <h2 className={'section-heading'}>Popular dishes list</h2>
      <div className={"section-content"}>
        <DishesSidebar />
        <DishesList>
          <DishesListItem dish={{name: "Dish", category: "Category", preparationComplexity: 78, recipe: {items: []}}} />
        </DishesList>
      </div>
    </section>
  );
}