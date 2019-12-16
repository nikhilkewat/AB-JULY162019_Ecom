import * as actionTypes from "../action/types";

const initialstate = {
  data: []
};

export const category = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.INSERT_CATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.UPDATE_CATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.DELETE_CATEGORY:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

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
