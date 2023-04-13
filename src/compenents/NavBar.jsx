import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand style={{ color: "#256Edc" }} as={Link} to="/">
                    <h1>Biupoll</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link
                                style={{ color: "#1c4c96" }}
                                as={Link}
                                to="/about"
                            >
                                Sobre nosotros
                            </Nav.Link>
                            <Nav.Link
                                style={{ color: "#1c4c96" }}
                                as={Link}
                                to="/services"
                            >
                                Servicios
                            </Nav.Link>
                            <Nav.Link
                                style={{ color: "#1c4c96" }}
                                as={Link}
                                to="/team"
                            >
                                Equipo
                            </Nav.Link>
                            <NavDropdown
                                style={{ color: "#1c4c96" }}
                                title="Descubre"
                                id="offcanvasNavbarDropdown"
                            >
                                <NavDropdown.Item as={Link} to="/stats">
                                    Estadisticas
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/pollster">
                                    Trabaja con nosotros
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/testimonials">
                                    Testimonios
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/contact">
                                    Contáctanos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavBar;
