import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";
import { UserState } from "./reducks/type/type";

type AuthProps = {
  children: React.ReactNode
};

const Auth = ({ children }: AuthProps) => {
  const dispatch = useDispatch();
  const selector = useSelector((state: UserState) => state);
  const isSignedIn = getIsSignedIn(selector);
  
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return <div>{children}</div>;
  }
};

export default Auth;