import { signInAction } from "./actions";
import { push } from "connected-react-router";
import { UserState } from "../type/type";
import { Dispatch } from "react";

export type SignInAction = {
  type: string,
  payload: {
    isSignedIn: boolean,
    uid: string,
    username: string
  }
}

export const signIn = () => {
  return async (dispatch: Dispatch<any>, getState: () => UserState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/fmyuk";

      const response = await fetch(url)
        .then(res => res.json())
        .catch(() => null);
      
      const username = response.login;
      console.log(username);

      dispatch(signInAction({
        users: {
          isSignedIn: true,
          uid: "00001",
          username
        }
      }));
      dispatch(push("/"));
    }
  };
};