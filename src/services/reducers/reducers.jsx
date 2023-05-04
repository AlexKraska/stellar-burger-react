import { combineReducers } from 'redux';
import { ingredientsDataReducer } from './ingredientsData.jsx';

export const rootReducer = combineReducers({
  ingredientsData: ingredientsDataReducer,
  // orderData:orderDataReducer,
  // popupState: popupStateReducer
});