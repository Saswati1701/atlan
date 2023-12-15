// rootReducer.js
import { combineReducers } from 'redux';
import customersReducer from './customers/customersReducer';
import categoriesReducer from './categories/categoriesReducer';


const rootReducer = combineReducers({
  customers: customersReducer,
  categories: categoriesReducer
});

export default rootReducer;
