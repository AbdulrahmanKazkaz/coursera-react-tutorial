import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

import { Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { MenuItem } from './pages/MenuItem';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/menu/:dishId' component={MenuItem} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};
