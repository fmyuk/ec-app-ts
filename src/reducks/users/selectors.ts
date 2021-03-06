import { createSelector } from "reselect";
import { UserState } from "../type/type";

const usersSelector = (state: UserState ) => state;

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
);

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
);