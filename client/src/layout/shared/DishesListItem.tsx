import {FC} from "react";
import {DishesListItemPropsType} from "../../types/dishes.types";
import {Link} from "react-router-dom";

export const DishesListItem: FC<DishesListItemPropsType> = props => {

  return (
    <div className={"dishes-list-item"}>
      <img src={`${process.env.PUBLIC_URL}/${props.dish.image}`} alt=""/>
      <div className={"dish-card-content"}>
        <p>{props.dish.name}</p>
        <Link to={`/dishes/${props.dish.id}`} className={"mt-2 w-100 btn btn-warning"}>View recipe</Link>
      </div>
    </div>
  );
}