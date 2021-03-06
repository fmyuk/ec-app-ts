import React from "react";
import { Switch, Route } from "react-router";
import { Home, ProductEdit, Reset, SignIn, SignUp } from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signIn"} component={SignIn} />
      <Route exact path={"/signIn/reset"} component={Reset} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/product/edit"} component={ProductEdit} />
      </Auth>
    </Switch>
  );
};

export default Router;
