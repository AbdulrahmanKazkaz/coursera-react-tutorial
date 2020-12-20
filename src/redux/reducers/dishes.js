import * as ActionType from "../actions/types";

let initialState = {
  isLoading: false,
  err: null,
  dishes: null,
};

export const dishesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DISHES_LAODING:
      return { ...state, isLoading: true, err: null, dishes: null };

    case ActionType.DISHES_FALID:
      return { ...state, isLoading: false, err: action.payload, dishes: null };

    case ActionType.ADD_DISHES:
      return { ...state, isLoading: false, err: null, dishes: action.payload };

    default:
      return state;
  }
};
