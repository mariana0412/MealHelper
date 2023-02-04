import {FC} from "react";
import {Button, Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export const SiteNavbar: FC = () => {
  return (
    <Navbar bg={"dark"} variant={"dark"} fixed={"top"} expand={"lg"} className={"header-navbar"}>
      <Container fluid>
        <LinkContainer to={"/"} replace>
          <Navbar.Brand className={"me-4"}>
            <img alt={"logo"} src={`${process.env.PUBLIC_URL}/logo.png`} width={"32"} height={"32"}
                 className={"d-inline-block align-top me-2"}
            />
            Meal Helper
          </Navbar.Brand>
        </LinkContainer>
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
              <LinkContainer to={'/dishes'} replace>
                <Nav.Link>Dishes</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/products'} replace>
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/'} state={{scrollToAboutSection: true}} replace>
                <Nav.Link href={"/"}>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <div className={"mt-4 mt-lg-0"}>
              <Button variant={"warning"} className={"me-2"}>Sign In</Button>
              <Button variant={"outline-light"}>Sign Up</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}