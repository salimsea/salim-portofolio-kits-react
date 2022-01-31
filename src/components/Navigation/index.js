import React, { useState } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { Logo } from "src/assets";
import "./style.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar expand="lg" light container="md" className="py-4">
      <NavbarBrand href="/">
        <img src={Logo} width="50" className="img-fluid" alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem active>
            <NavLink to="/" tag={RRNavLink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/portfolio" tag={RRNavLink}>
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog" tag={RRNavLink}>
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tools" tag={RRNavLink}>
              Tools
            </NavLink>
          </NavItem>
        </Nav>
        <Button
          onClick={() =>
            window.location.replace(
              "https://wa.me/6282112235774?text=Assalamualaikum%20Warahmatullahi%20Wabarakatuh"
            )
          }
          className="btn-menu ms-4 px-5"
        >
          CONTACT ME
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
