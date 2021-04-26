import { UserState } from "../type/type";

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: UserState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.users.uid,
      username: userState.users.username
    }
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  };
};
