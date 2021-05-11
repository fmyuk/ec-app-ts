import React from "react";
import { useSelector } from "react-redux";
import { UserState } from "../reducks/type/type";
import { getUserId, getUserName } from "../reducks/users/selectors";

const Home = () => {
  const selector = useSelector((state: UserState) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <p>{username}</p>
    </div>
  );
};

export default Home;
