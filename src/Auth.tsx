import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";
import { UserState } from "./reducks/type/type";
import { Route } from "react-router";
import { Home } from "./templates";

const Auth = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: UserState) => state);
  const isSignedIn = getIsSignedIn(selector);
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState);
    }
  }, []);
  if (!isSignedIn) {
    return <></>;
  } else {
    return <Route exact path={"(/)?"} component={Home} />;
  }
};

export default Auth;