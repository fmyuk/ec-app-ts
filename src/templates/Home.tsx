import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../reducks/type/type";
import { signOut } from "../reducks/users/operations";
import { getUserId, getUserName } from "../reducks/users/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: UserState) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <p>{username}</p>
      <button onClick={() => dispatch(signOut)}>SIGN OUT</button>
    </div>
  );
};

export default Home;
