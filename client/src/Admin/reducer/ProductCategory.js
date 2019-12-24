import * as actionTypes from "../action/types";

const initialstate = {
  data: []
};

export const productcategory = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.INSERT_PRODUCTCATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.UPDATE_PRODUCTCATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.DELETE_PRODUCTCATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

export const productcategoryList = (state = initialstate, action) => {
  //console.log(action);
  switch (action.type) {
    case actionTypes.GET_PRODUCTCATEGORY_LIST:
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

//get Product List for drop down
export const productList = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST:
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

//get Category List for drop down
export const categoryList = (state = initialstate, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};
