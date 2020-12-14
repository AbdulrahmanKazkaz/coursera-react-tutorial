import { Navbar, NavbarBrand } from "reactstrap";

export const App = () => {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};
