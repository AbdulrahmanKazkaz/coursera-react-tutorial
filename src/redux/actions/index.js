import * as ActionType from './types';
import axios from '../../helpers/axios';

//!  Dishes Action
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

  axios
    .get('/dishes')
    .then((res) => dispatch(addDishes(res.data)))
    .catch((err) => {
      dispatch(dishesFaild(err));
    });
};

//! Comments Action
export const commentsFaild = (err) => ({
  type: ActionType.COMMENTS_FAILD,
  payload: err,
});

export const addComment = (dishId, author, comment, rating) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    dishId,
    author,
    comment,
    rating,
  },
});

export const addComments = (comments) => ({
  type: ActionType.ADD_COMMENTS,
  payload: comments,
});

export const fetchComments = () => (dispatch) => {
  axios
    .get('/comments')
    .then((res) => dispatch(addComments(res.data)))
    .catch((err) => {
      dispatch(commentsFaild(err));
    });
};

//! Promotions Action
export const promosLoading = () => ({
  type: ActionType.PROMOS_LOADING,
});

export const promosFaild = (err) => ({
  type: ActionType.PROMOS_FAILD,
  payload: err,
});

export const addPromotions = (promos) => ({
  type: ActionType.ADD_PROMOS,
  payload: promos,
});

export const fetchPromotions = () => (dispatch) => {
  dispatch(promosLoading());

  axios
    .get('/promotions')
    .then((res) => dispatch(addPromotions(res.data)))
    .catch((err) => {
      dispatch(promosFaild(err));
    });
};

//! Leaders Action
export const leadersLoading = () => ({
  type: ActionType.LEADERS_LOADING,
});

export const leadersFaild = (err) => ({
  type: ActionType.LEADERS_FAILD,
  payload: err,
});

export const addLeaders = (leaders) => ({
  type: ActionType.ADD_LEADERS,
  payload: leaders,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  axios
    .get('/leaders')
    .then((res) => dispatch(addLeaders(res.data)))
    .catch((err) => {
      dispatch(leadersFaild(err));
    });
};
