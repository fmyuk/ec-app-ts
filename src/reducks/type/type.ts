export type UserState = {
  isSignedIn?: boolean,
  role: string,
  uid: string,
  username: string
};

export type Action = {
  type: string,
  payload: UserState
};
