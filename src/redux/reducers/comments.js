import * as ActionType from '../actions/types';

let initialState = {
  err: null,
  comments: null,
};

export const commentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT: {
      let comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.comments.comconcat(comment);
    }
    case ActionType.COMMENTS_FAILD: {
      return { ...state, err: action.payload, comments: null };
    }
    case ActionType.ADD_COMMENTS:
      return { ...state, err: null, dishes: action.payload };
    default: {
      return state;
    }
  }
};
