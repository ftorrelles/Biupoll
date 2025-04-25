// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <Navbar expand="lg">
//       <Container>
//         <Navbar.Brand style={{ color: "#256Edc" }} as={Link} to="/">
//           <img src="Buipoll_nav.png" alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="offcanvasNavbar" />
//         <Navbar.Offcanvas
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//           placement="end"
//         >
//           <Offcanvas.Header closeButton></Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link style={{ color: "#143a6d" }} as={Link} to="/about">
//                 Sobre nosotros
//               </Nav.Link>
//               <Nav.Link style={{ color: "#143a6d" }} as={Link} to="/services">
//                 Servicios
//               </Nav.Link>
//               <NavDropdown
//                 style={{ color: "#143a6d" }}
//                 title="Descubre"
//                 id="offcanvasNavbarDropdown"
//               >
//                 <NavDropdown.Item as={Link} to="/stats">
//                   Estadisticas
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/pollster">
//                   Trabaja con nosotros
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/contact">
//                   Contáctanos
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="logoNav.png" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/businessCard"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
            >
              Redes Sociales
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
