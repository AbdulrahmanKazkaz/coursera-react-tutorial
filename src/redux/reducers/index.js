import { dishesReducers } from "./dishes";
import { commentsReducers } from "./comments";
import { leadersReducers } from "./leaders";
import { promotionReducers } from "./promotions";

import { combineReducers } from "redux";

export const allReducers = combineReducers({
  dishes: dishesReducers,
  comments: commentsReducers,
  leaders: leadersReducers,
  promotion: promotionReducers,
});
