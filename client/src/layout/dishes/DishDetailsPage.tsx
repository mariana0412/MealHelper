import {FC, useEffect, useState} from "react";
import {SiteNavbar} from "../shared/SiteNavbar";
import {Footer} from "../shared/Footer";
import {useLocation} from "react-router";
import {DishDetailsPageStateType} from "../../types/dishes.types";
import {Link} from "react-router-dom";
import {v4} from "uuid";

const initialState: DishDetailsPageStateType = {
  dish: undefined
}

export const DishDetailsPage: FC = () => {

  const location = useLocation();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      ...state,
      dish: location.state.dish
    })
  }, [])

  return (
    <main className={"dish-details-page"}>
      <SiteNavbar />
      <section className={"dish-details-section p-2"}>
        {
          state.dish ?
            <div className={"section-container"}>
              <div className={"section-header d-flex justify-content-between align-items-center mt-1 mb-3"}>
                <h2>{state.dish.name}</h2>
                <Link to={'/dishes'} className={"btn btn-dark"}>Back</Link>
              </div>
              <div className={"section-content w-100 d-flex flex-wrap flex-xl-nowrap"}>
                <div className={"left-column pe-xl-4"}>
                  <img src={state.dish.image} alt={state.dish.name} className={"meal-image"} />
                  <div className={"mt-3"}>
                    <h3>Video</h3>
                    <iframe src={state.dish.youTubeLink?.replace("watch?v=", "embed/")} allowFullScreen/>
                  </div>
                  <div className={"mt-3 additional-info"}>
                    <h3>Additional info</h3>
                    <p><span>Category: </span>{state.dish.category}</p>
                    <p><span>Area: </span>{state.dish.area}</p>
                    <p>
                      <span>Tags: </span>
                      { state.dish.tags &&
                        state.dish.tags.map((tag: string) => (
                          <span key={v4()} className={"tag"}>{tag}</span>
                        ))
                      }
                    </p>
                    <p><span>Preparation time: </span>{state.dish.preparationTime}</p>
                  </div>
                </div>
                <div className={"right-column w-100 ps-xl-4 mt-5 mt-xl-0"}>
                  <h3>How to cook</h3>
                  <p>{state.dish.recipe.instructions}</p>
                  <h3>Ingredients</h3>
                  <table className={"table table-bordered"}>
                    <thead>
                      <tr>
                        <th className={"w-50"}>Name</th>
                        <th className={"w-50"}>Measure</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        state.dish.recipe.ingredients.map(ingredient => (
                          <tr key={v4()}>
                            <td>
                              <img src={`https://www.themealdb.com/images/ingredients/${ingredient.name}.png`}
                                   alt={ingredient.name}
                                   width={50}
                                   className={"me-2"}
                              />
                              {ingredient.name}
                            </td>
                            <td>{ingredient.measure}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          :
            <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt={"loading"} />
        }

      </section>
      <Footer />
    </main>
  )
}