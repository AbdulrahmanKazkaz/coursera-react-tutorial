import { Nav } from "./layouts/Nav";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

import { Menu } from "./containers/Menu";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Menu />
      <Footer />
    </>
  );
};
