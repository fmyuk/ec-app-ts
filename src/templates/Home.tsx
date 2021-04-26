import React from "react";
import { DefaultRootState, useSelector } from "react-redux";
import { UserState } from "../reducks/type/type";
import { getUserId } from "../reducks/users/selectors";

const Home = () => {
  const selector = useSelector((state: UserState) => state);
  const uid = getUserId(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
    </div>
  );
};

export default Home;
