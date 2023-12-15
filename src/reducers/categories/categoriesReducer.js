import categories from "./categories";
const initialState = {
    categories: categories
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
        return state.categories;
    }
  };
  
  export default categoriesReducer;