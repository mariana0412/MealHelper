import {FC} from "react";
import {Container, Nav, Navbar, Offcanvas, Button, Image} from "react-bootstrap";

export const Header: FC = () => {
  return (
    <header>
      <Navbar bg={"dark"} variant={"dark"} fixed={"top"} expand={"lg"}>
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
          >
            <Offcanvas.Header closeButton>
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
              <div>
                <Button variant={"primary"} className={"me-2"}>Sign In</Button>
                <Button variant={"outline-light"}>Sign Up</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container fluid className={"header-image-container p-0"}>
        <Image src={`${process.env.PUBLIC_URL}/header-image.jpg`} alt={"Food"}
               className={"header-image img-fluid vh-100 vw-100"} />
        <div className={"header-text"}>
          <h1>Meal Helper</h1>
          <h2 className={"mt-3"}>Delicious recipes. Daily updated</h2>
          <Button variant={"danger"} size={"lg"} className={"mt-5"}>Look for a recipe</Button>
        </div>
      </Container>
    </header>
  );
}