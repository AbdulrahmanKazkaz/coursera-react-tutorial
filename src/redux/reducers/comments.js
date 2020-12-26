import * as ActionType from '../actions/types';

let initialState = {
  err: null,
  comments: null,
};

export const commentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT: {
      let comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    }
    case ActionType.COMMENTS_FAILD: {
      return { ...state, err: action.payload, comments: null };
    }
    case ActionType.ADD_COMMENTS: {
      return { ...state, err: null, comments: action.payload };
    }
    default: {
      return state;
    }
  }
};
