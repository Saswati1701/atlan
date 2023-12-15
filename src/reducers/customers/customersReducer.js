import customers from "./customers";

const initialState = {
    customers: customers
};

const customersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
        return state.customers;
    }
  };
  
  export default customersReducer;