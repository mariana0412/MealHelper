import {FC} from "react";
import {Container, Button, Image} from "react-bootstrap";
import {SiteNavbar} from "./SiteNavbar";

export const Header: FC = () => {
  return (
    <header className={"site-header"}>
      <SiteNavbar />
      <Container fluid className={"header-image-container p-0"}>
        <Image src={`${process.env.PUBLIC_URL}/header-image.jpg`} alt={"Food"}
               className={"header-image img-fluid vh-100 vw-100"} />
        <div className={"header-content p-3 p-md-5 flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-start"}>
          <div className={"header-text align-items-center align-items-xl-start mt-5"}>
            <h1>Meal Helper</h1>
            <h2 className={"mt-3"}>Delicious recipes. Daily updated</h2>
            <Button variant={"warning"} size={"lg"} className={"mt-5 look-for-a-recipe"}>Look for a recipe</Button>
          </div>
          <div className={"user-instructions mt-5"}>
            <div className={"user-instructions-list"}>
              <div className={"user-instructions-item"}>
                <Image src={`${process.env.PUBLIC_URL}/recipe-book.png`} alt={"Look for a recipe"} />
                <p>Look for a recipe</p>
              </div>
              <div className={"user-instructions-item"}>
                <Image src={`${process.env.PUBLIC_URL}/grocery.png`} alt={"Check ingredients"} />
                <p>Check what ingredients are needed</p>
              </div>
              <div className={"user-instructions-item"}>
                <Image src={`${process.env.PUBLIC_URL}/recipe.png`} alt={"Look how to cook"} />
                <p>Read how to cook the selected dish</p>
              </div>
              <div className={"user-instructions-item"}>
                <Image src={`${process.env.PUBLIC_URL}/meal.png`} alt={"Enjoy your meal"} />
                <p>Enjoy your meal</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}