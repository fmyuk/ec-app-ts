import { createSelector } from "reselect";
import { UserState } from "../type/type";

const usersSelector = (state: { users: UserState }) => state.users;

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);