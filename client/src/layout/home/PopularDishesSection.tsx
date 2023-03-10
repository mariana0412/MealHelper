import {FC, forwardRef, useEffect, useState} from "react";
import {DishesList} from "../shared/DishesList";
import {DishesListItem} from "../shared/DishesListItem";
import {Link} from "react-router-dom";
import {Dish, PopularDishesSectionPropsType, PopularDishesSectionStateType} from "../../types/dishes.types";
import {dishHandler} from "../../helpers/dishHandler";

const initialState: PopularDishesSectionStateType = {
  dishes: [],
  contentIsLoaded: false
}

export const PopularDishesSection: FC<any> = forwardRef((props: PopularDishesSectionPropsType, ref: any) => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    dishHandler.fetchByNumber(10).then(dishes => {
      setState({
        ...state,
        dishes: dishes as Dish[],
        contentIsLoaded: true
      });
      props.setHomePageLoaded();
    })
  }, [])

  return (
    <section className={"popular-dishes-section"} ref={ref}>
      <h2 className={'section-heading'}>Popular dishes</h2>
      <div className={`section-content ${!state.contentIsLoaded ? `loading` : ``}`}>
        { state.contentIsLoaded ?
            <DishesList>
              {
                state.dishes.map(dish => (
                  <DishesListItem key={dish.id} dish={dish} />
                ))
              }
            </DishesList>
          :
            <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt={"loading"} />
        }
      </div>
      <Link to={'/dishes'} replace className={"btn btn-dark text-align-center my-3 view-all-dishes-button btn-lg"}>View all dishes</Link>
    </section>
  );
})