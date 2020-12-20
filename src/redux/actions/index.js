import * as ActionType from "./types";
import { DISHES } from "../../shared/dishes";

export const addComment = (dishId, author, comment, rating) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    dishId,
    author,
    comment,
    rating,
  },
});

export const dishesLoading = () => ({
  type: ActionType.DISHES_LAODING,
});

export const dishesFaild = (err) => ({
  type: ActionType.DISHES_FALID,
  payload: err,
});

export const addDishes = (dishes) => ({
  type: ActionType.ADD_DISHES,
  payload: dishes,
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 3000);
};
