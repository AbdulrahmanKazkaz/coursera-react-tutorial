import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Nav as BootstrapNav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark color="dark" fixed="fixed" expand="md">
      <div className="container">
        <NavbarBrand className="mr-auto" href="/">
          <img src="assets/images/logo.png" height="30" width="41" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <BootstrapNav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg"></i> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <i className="fa fa-info fa-lg"></i> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <i className="fa fa-list fa-lg"></i> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className="fa fa-address-card fa-lg"></i> Contact Us
              </NavLink>
            </NavItem>
          </BootstrapNav>
        </Collapse>
      </div>
    </Navbar>
  );
};
