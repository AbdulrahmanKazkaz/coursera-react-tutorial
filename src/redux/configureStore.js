import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
  return createStore(allReducers, applyMiddleware(thunk, logger));
};
