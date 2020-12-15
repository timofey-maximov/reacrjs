import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from './Components/Menu/Menu';
import { Routes, HomeUrl, FilmsUrl, SerialsUrl, PeopleUrl, LoginUrl, SignupUrl, HomeLink, } from './Routes';

export const App = () => {

  return (
    <>

      <BrowserRouter>
        <Menu items={Routes} />
        <Switch>

          {Routes.map((item, index) => (
                <Route key={index} path={item.Url} exact>
                  <item.component />
                </Route>
          ))}

        </Switch>
      </BrowserRouter>


    </>
  );
}
