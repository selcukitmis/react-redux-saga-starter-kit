import React from "react";
import Login from "../Containers/Login";
import Home from "../Containers/Home";
import About from "../Containers/About";
import NotFound from "../Containers/NotFound";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createStore from '../Redux'
const store = createStore();

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute path="/" component={Login} exact={true}/>
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/about" component={About}/>
          <PublicRoute component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
