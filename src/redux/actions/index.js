import * as ActionType from "./types";

export const addComment = (dishId, author, comment, rating) => {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      dishId,
      author,
      comment,
      rating,
    },
  };
};
