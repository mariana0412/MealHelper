import {FC} from "react";
import {DishesSidebar} from "../shared/DishesSidebar";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";

export const DishesSection: FC = () => {
  return (
    <section className={"dishes-section"}>
      <div className={"section-content"}>
        <div className={"sidebar-container"}>
          <DishesSidebar />
        </div>
        <DishesList>
          <DishesListItem dish={{id: 1, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 2, name: "Смажене дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 3, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 4, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 5, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 6, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 7, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 1, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 2, name: "Смажене дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 3, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 4, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 5, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 6, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 7, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 1, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 2, name: "Смажене дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 3, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 4, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 5, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 6, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
          <DishesListItem dish={{id: 7, name: "Смажене російське дитинча", image: "header-image.jpg", category: "Перші страви", preparationTime: "10 min", recipe: {items: []}}} />
        </DishesList>
      </div>
    </section>
  );
}