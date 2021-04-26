export type UserState = {
  users: {
    isSignedIn?: boolean,
    uid: string,
    username: string
  }
};

export type Action = {
  type: string,
  payload: UserState
};
