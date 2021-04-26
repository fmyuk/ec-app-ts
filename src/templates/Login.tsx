import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { signInAction } from "../reducks/users/actions";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => {
        dispatch(signInAction({ users: { uid: "0001", username: "user" } }))
        dispatch(push("/"))
      }}>
        ログインする
      </button>
    </div>
  );
};

export default Login;
