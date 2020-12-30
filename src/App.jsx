import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from './Components/Menu/Menu';
import { MainMenu } from './MainMenu';
import { Serials } from './Pages/Serials/Serials';
import { Signup } from './Pages/Signup/Signup';
import { Home } from './Pages/Home/Home';
import { People } from './Pages/People/People';
import { Login } from './Pages/Login/Login';
import { Films } from './Pages/Films/Films';
import { Product } from './Pages/Product/Product';
import { HomeRoute, FilmsRoute, SerialsRoute, PeopleRoute, LoginRoute, SignupRoute, ProductRoutePattern } from './Routes';

export const App = () => {

  return (
    <>

      <BrowserRouter>
        <Menu items={MainMenu} />
        <Switch>
          <Route path={HomeRoute} exact component={Home} />
          <Route path={FilmsRoute} component={Films} />
          <Route path={SerialsRoute} component={Serials} />
          <Route path={PeopleRoute} component={People} />
          <Route path={LoginRoute} component={Login} />
          <Route path={SignupRoute} component={Signup} />
          <Route path={ProductRoutePattern} component={Product} />
        </Switch>
      </BrowserRouter>


    </>
  );
}
