import { Navbar, NavbarBrand } from "reactstrap";

export const Nav = () => {
  return (
    <Navbar dark color="dark">
      <div className="container">
        <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
      </div>
    </Navbar>
  );
};
