import { UserState } from "../type/type";

const initialState: UserState = {
  users: {
    isSignedIn: false,
    uid: "",
    username: ""
  }
};

export default initialState;
