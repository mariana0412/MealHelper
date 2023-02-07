import {FC} from "react";
import {DishesListItemPropsType} from "../../types/dishes.types";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStopwatch, faUtensils} from "@fortawesome/free-solid-svg-icons";

export const DishesListItem: FC<DishesListItemPropsType> = props => {

  return (
    <div className={"dishes-list-item"}>
      <header className={"dish-card-header"}>
        <img src={props.dish.image} alt=""/>
        <p className={"dish-card-name mt-2 mb-1"}>{props.dish.name}</p>
        <div className={"dish-card-content-row d-flex flex-wrap mb-4"}>
          <span className={"dish-card-category mb-0 me-4"}>
            <FontAwesomeIcon icon={faUtensils} className={"me-2"} />
            {props.dish.category}
          </span>
          <span className={"dish-card-preparation-complexity mb-0"}>
            <FontAwesomeIcon icon={faStopwatch} className={"me-2"} />
            {props.dish.preparationTime}
          </span>
        </div>
      </header>
      <div className={"dish-card-content"}>
        <Link to={`/dishes/${props.dish.id}`} replace className={"w-100 btn btn-warning"}>View recipe</Link>
      </div>
    </div>
  );
}