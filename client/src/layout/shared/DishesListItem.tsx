import {FC} from "react";
import {DishesListItemPropsType} from "../../types/dishes.types";

export const DishesListItem: FC<DishesListItemPropsType> = props => {

  return (
    <div className={"dishes-list-item"}>
      <p>{props.dish.name}</p>
    </div>
  );
}