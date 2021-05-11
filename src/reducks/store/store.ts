import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { UsersReducer } from "../users/reducers";
import * as History from "history";
import thunk from "redux-thunk";

export default function createStore(history: History.History) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
};