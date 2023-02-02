import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC} from "react";
import {faCheck, faFire, faHeart, faListUl, faTableList} from "@fortawesome/free-solid-svg-icons";

export const DishesSidebar: FC = () => {
  return (
    <aside className={"sidebar recipes-section-sidebar"}>
      <div className={"sidebar-section"}>
        <h3>Show dishes</h3>
        <nav className={"sidebar-buttons"}>
          <a className={"button-active"}>
            <FontAwesomeIcon icon={faListUl} className={"me-2"} />
            All
          </a>
          <a>
            <FontAwesomeIcon icon={faFire} className={"me-2"} />
            New
          </a>
          <a>
            <FontAwesomeIcon icon={faHeart} className={"me-2"} />
            Most popular
          </a>
          <a>
            <FontAwesomeIcon icon={faCheck} className={"me-2"} />
            Available for me
          </a>
        </nav>
      </div>
      <div className={"sidebar-section"}>
        <h3>Order by</h3>
        <select>
          <option value={"date_added"} selected>Date added</option>
          <option value={"name"}>Name</option>
          <option value={"preparation_complexity"}>Preparation complexity</option>
        </select>
      </div>
    </aside>
  );
}