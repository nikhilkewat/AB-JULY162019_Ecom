import * as actionTypes from "./types";

const initialState = {
  isLoggedIn: true,
  redirectToApplication:false
};

export let auth = function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return {
        ...state,
        ...action.result
      };

    default:
      return state;
  }
};
