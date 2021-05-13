import React from "react";
import { Switch, Route } from "react-router";
// import { LoginContainer } from "./containers";
import { Login, Home } from "./templates";

const Router = () => {
  return (
    <Switch>
      {/* <Route exact path={"/login"} component={LoginContainer} /> */}
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
