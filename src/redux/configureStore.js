import { createStore } from "redux";
import { allReducers } from "./reducers";

export const configureStore = () => {
  return createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
