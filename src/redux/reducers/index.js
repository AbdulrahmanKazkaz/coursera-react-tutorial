import { dishesReducers } from './dishes';
import { commentsReducers } from './comments';
import { leadersReducers } from './leaders';
import { promotionReducers } from './promotions';
import { initialFeedback } from './forms';

import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  dishes: dishesReducers,
  comments: commentsReducers,
  leaders: leadersReducers,
  promotion: promotionReducers,
  ...createForms({
    feedback: initialFeedback,
  }),
});
