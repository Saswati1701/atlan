// rootReducer.js
import { combineReducers } from 'redux';
import customersReducer from './customers/customersReducer';


const rootReducer = combineReducers({
  customers: customersReducer
});

export default rootReducer;
