import {FC} from "react";
import {Container, Nav, Navbar, Offcanvas, Button, Image} from "react-bootstrap";

export const Header: FC = () => {
  return (
    <header className={"site-header"}>
      <Navbar bg={"dark"} variant={"dark"} fixed={"top"} expand={"lg"} className={"header-navbar"}>
        <Container fluid>
          <Navbar.Brand href={'/'} className={"me-4"}>
            <img alt={"logo"} src={`${process.env.PUBLIC_URL}/logo.png`} width={"32"} height={"32"}
                 className={"d-inline-block align-top me-2"}
            />
            Meal Helper
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement={"start"}
                            className={"bg-dark text-white"}
          >
            <Offcanvas.Header closeButton closeVariant={"white"}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={"align-items-center"}>
              <Nav className={"me-auto"}>
                <Nav.Link href={"/"}>Dishes</Nav.Link>
                <Nav.Link href={"#link"}>Products</Nav.Link>
                <Nav.Link href={"#link"}>About</Nav.Link>
              </Nav>
              <div className={"mt-4 mt-lg-0"}>
                <Button variant={"warning"} className={"me-2"}>Sign In</Button>
                <Button variant={"outline-light"}>Sign Up</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
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