import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, useEffect, useState} from "react";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";
import {faEye, faFilter, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Pagination} from "../shared/Pagination";
import {
  Dish,
  DishesOrderBySelectorEnum,
  DishesSectionStateType,
  DishesShowDishesSelectorEnum, DishIngredient, Recipe
} from "../../types/dishes.types";
import axios from "axios";
import {dishHandler} from "../../helpers/dishHandler";

const initialState: DishesSectionStateType = {
  activePage: 1,
  contentPerPage: 20,
  filters: {
    showDishes: DishesShowDishesSelectorEnum.All,
    orderBy: DishesOrderBySelectorEnum.DateAdded,
    searchQuery: ""
  },
  content: [],
  filteredContent: [],
  contentOnPage: []
}

export const DishesSection: FC = () => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    dishHandler.fetchAll().then(dishes => {
      dishes = dishes as Dish[];
      setState({
        ...state,
        content: dishes,
        filteredContent: dishes,
        contentOnPage: dishes
      })
    })
  }, [])

  return (
    <section className={"dishes-section"}>
      <div className={"dishes-section-filters d-flex"}>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2"}>
          <FontAwesomeIcon icon={faEye} className={"me-2"} />
          <span className={"me-2"}>Show dishes: </span>
          <select id={"dishes-section-show-dishes"}>
            <option value={DishesShowDishesSelectorEnum.All} defaultChecked>All</option>
            <option value={DishesShowDishesSelectorEnum.AvailableForMe}>Available for me</option>
          </select>
        </div>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2"}>
          <FontAwesomeIcon icon={faFilter} className={"me-2"} />
          <span className={"me-2"}>Order by:</span>
          <select id={"dishes-section-order-by"}>
            <option value={DishesOrderBySelectorEnum.DateAdded} defaultChecked>Date added</option>
            <option value={DishesOrderBySelectorEnum.Name}>Name</option>
            <option value={DishesOrderBySelectorEnum.PreparationTime}>Preparation time</option>
          </select>
        </div>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2 w-100"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={"me-2"} />
          <span className={"me-2"}>Search: </span>
          <input type={"text"} />
        </div>
      </div>
      <div className={"section-content"}>
        <DishesList>
          {
            state.contentOnPage.map(dish => (
              <DishesListItem key={dish.id} dish={dish} />
            ))
          }
        </DishesList>
      </div>
      <Pagination
        items={state.filteredContent as any}
        itemsPerPage={state.contentPerPage}
        numberOfButtons={7}
        updatePage={(page: number, items: Dish[]) => {
          setState({...state, activePage: page, contentOnPage: items})
        }}
      />
    </section>
  );
}