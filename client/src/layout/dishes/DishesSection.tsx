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
  DishesShowDishesSelectorEnum
} from "../../types/dishes.types";
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
  contentOnPage: [],
  contentIsLoaded: false
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
        contentOnPage: dishes,
        contentIsLoaded: true
      })
    })
  }, [])

  useEffect(() => {
    let filteredContent = state.content;
    switch (state.filters.orderBy) {
      case DishesOrderBySelectorEnum.DateAdded:
        filteredContent = structuredClone(filteredContent).sort((itemA: Dish, itemB: Dish) => {
          if (itemA.dateModified && itemB.dateModified)
            return itemA.dateModified.getTime() - itemB.dateModified.getTime();
          return itemA.id < itemB.id;
        })
        break;
      case DishesOrderBySelectorEnum.Name:
        filteredContent = structuredClone(filteredContent).sort((itemA: Dish, itemB: Dish) => {
          return itemA.name.localeCompare(itemB.name);
        })
        break;
      case DishesOrderBySelectorEnum.PreparationTime:
        filteredContent = structuredClone(filteredContent).sort((itemA: Dish, itemB: Dish) => {
          return Number(itemA.preparationTime.split("min.")[0]) - Number(itemB.preparationTime.split("min.")[0])
        });
        break;
    }

    filteredContent = structuredClone(filteredContent).filter((dish: Dish) => dish.name.includes(state.filters.searchQuery))

    setState({
      ...state,
      filteredContent: filteredContent
    })
  }, [state.filters])

  return (
    <section className={"dishes-section"}>
      <div className={"dishes-section-filters d-flex"}>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2"}>
          <FontAwesomeIcon icon={faEye} className={"me-2"} />
          <span className={"me-2"}>Show dishes: </span>
          <select id={"dishes-section-show-dishes"} onChange={event => {
            setState({
              ...state,
              filters: {
                ...state.filters,
                showDishes: Number(event.target.value)
              }
            })
          }}>
            <option value={DishesShowDishesSelectorEnum.All} defaultChecked>All</option>
            <option value={DishesShowDishesSelectorEnum.AvailableForMe}>Available for me</option>
          </select>
        </div>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2"}>
          <FontAwesomeIcon icon={faFilter} className={"me-2"} />
          <span className={"me-2"}>Order by:</span>
          <select id={"dishes-section-order-by"} onChange={event => {
            setState({
              ...state,
              filters: {
                ...state.filters,
                orderBy: Number(event.target.value)
              }
            })
          }}>
            <option value={DishesOrderBySelectorEnum.DateAdded} defaultChecked>Date added</option>
            <option value={DishesOrderBySelectorEnum.Name}>Name</option>
            <option value={DishesOrderBySelectorEnum.PreparationTime}>Preparation time</option>
          </select>
        </div>
        <div className={"dishes-section-filters-item d-flex align-items-center p-2 w-100"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={"me-2"} />
          <span className={"me-2"}>Search: </span>
          <input type={"text"} onChange={event => {
            setState({
              ...state,
              filters: {
                ...state.filters,
                searchQuery: event.target.value
              }
            })
          }} />
        </div>
      </div>
      <div className={`section-content ${!state.contentIsLoaded ? `loading` : ``}`}>
        { state.contentIsLoaded ?
            <DishesList>
              {
                state.contentOnPage.map(dish => (
                  <DishesListItem key={dish.id} dish={dish}/>
                ))
              }
            </DishesList>
          :
            <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt={"loading"} />
        }
      </div>
      <Pagination
        items={state.filteredContent as Dish[]}
        itemsPerPage={state.contentPerPage}
        numberOfButtons={7}
        updatePage={(page: number, items: Dish[]) => {
          setState({...state, activePage: page, contentOnPage: items})
        }}
      />
    </section>
  );
}