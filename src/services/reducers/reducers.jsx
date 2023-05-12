import { combineReducers } from 'redux';
import { ingredientsDataReducer } from './ingredientsData.jsx';
import { popupStateReducer } from './popup.jsx';
import { orderReducer } from './orderData.jsx';
import { constructorReducer } from './constuctor.jsx';

export const rootReducer = combineReducers({
  ingredientsData: ingredientsDataReducer,
  orderData: orderReducer,
  popupState: popupStateReducer,
  burgerConstructor: constructorReducer,
});