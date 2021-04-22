import { UserState } from "../type/type";

const initialState: { users: UserState } = {
  users: {
    isSignedIn: false,
    uid: "",
    username: ""
  }
};

export default initialState;
