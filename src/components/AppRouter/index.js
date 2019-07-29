import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "../../containers/Home";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import Article from "../../containers/Article";
const AppRouter = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/article/:id" component={Article} />
  </>
);

export default AppRouter;
