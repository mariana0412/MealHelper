import {FC, forwardRef} from "react";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";
import {Link} from "react-router-dom";

export const PopularDishesSection: FC<any> = forwardRef((props, ref: any) => {
  return (
    <section className={"popular-dishes-section"} ref={ref}>
      <h2 className={'section-heading'}>Popular dishes</h2>
      <div className={"section-content"}>
        <DishesList>
          <DishesListItem dish={{id: 1, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 2, name: "Смажене дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 3, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 4, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 5, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 6, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 7, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
        </DishesList>
      </div>
      <Link to={'/dishes'} replace className={"btn btn-dark text-align-center my-3 view-all-dishes-button btn-lg"}>View all dishes</Link>
    </section>
  );
})