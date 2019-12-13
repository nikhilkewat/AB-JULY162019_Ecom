import * as actionTypes from "./types";
import axios from "axios";

// const dispatch_login = data => {
//   return {
//     type: actionTypes.LOGIN,
//     payload: data
//   };
// };

export const insertCategory = objCategory => dispatch => {  
  axios({
    method: "POST",
    url: "http://localhost:5002/api/insertcategory",
    data: objCategory
  }).then(res => {
    dispatch({
      type: actionTypes.INSERT_CATEGORY,
      result: res.data
    });
  });
};

export const getCategoryList = () => dispatch => {  
    axios({
      method: "GET",
      url: "http://localhost:5002/api/getcategory",
     
    }).then(res => {
      dispatch({
        type: actionTypes.GET_CATEGORY_LIST,
        result: res.data
      });
    });
  };