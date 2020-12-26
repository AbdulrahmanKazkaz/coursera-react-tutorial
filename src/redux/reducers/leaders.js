import * as ActionType from '../actions/types';

let initialState = {
  isLoading: false,
  err: null,
  leaders: null,
};

export const leadersReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LEADERS_LOADING:
      return { ...state, isLoading: true, err: null, leaders: null };

    case ActionType.LEADERS_FAILD:
      return { ...state, isLoading: false, err: action.payload, leaders: null };

    case ActionType.ADD_LEADERS:
      return { ...state, isLoading: false, err: null, leaders: action.payload };

    default:
      return state;
  }
};
