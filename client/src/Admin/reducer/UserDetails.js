import * as actionTypes from "../action/types";

const initialstate = {
 
    data: []
 
};

export const userDetails = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.INSERT_USER_DETAILS:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.UPDATE_USER_DETAILS:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    case actionTypes.DELETE_USER_DETAILS:
      console.log("InReducer:", action);
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

export const userDetailsList = (state = initialstate, action) => {
    console.log(initialstate)
  switch (action.type) {
      
    case actionTypes.GET_USER_DETAILS_LIST:
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};
