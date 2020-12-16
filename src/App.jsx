import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { MenuItem } from "./pages/MenuItem";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/404";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/:dishId" component={MenuItem} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
