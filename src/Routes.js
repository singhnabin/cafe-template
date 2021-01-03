import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./header/login/Login";
import Signup from "./header/login/Signup";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
