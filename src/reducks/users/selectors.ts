import { createSelector } from "reselect";
import { UserState } from "../type/type";

const usersSelector = (state: UserState ) => state.users;

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);