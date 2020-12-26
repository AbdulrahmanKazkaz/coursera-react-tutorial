import * as ActionType from '../actions/types';

let initialState = {
  isLoading: false,
  err: null,
  promos: null,
};

export const promotionReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PROMOS_LOADING:
      return { ...state, isLoading: true, err: null, promos: null };

    case ActionType.PROMOS_FAILD:
      return { ...state, isLoading: false, err: action.payload, promos: null };

    case ActionType.ADD_PROMOS:
      return { ...state, isLoading: false, err: null, promos: action.payload };

    default:
      return state;
  }
};
