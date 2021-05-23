import React from "react";
import { Switch, Route } from "react-router";
import { Home, SignIn, SignUp } from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signIn"} component={SignIn} />
      <Auth />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
