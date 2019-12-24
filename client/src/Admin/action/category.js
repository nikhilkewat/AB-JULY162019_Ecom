import * as actionTypes from "./types";
import axios from "axios";

const dispatch_categoryList = data => {
  return {
    type: actionTypes.GET_CATEGORY_LIST,
    result: data.data
  };
};
// const dispatch_deleteCategory = data => {

//   return {
//     type: actionTypes.DELETE_CATEGORY,
//     result: data.data
//   };
// };

// const dispatch_InsertCategory = data => {

//   return {
//     type: actionTypes.INSERT_CATEGORY,
//     result: data.data
//   };
// };

// const dispatch_UpdateCategory = data => {

//   return {
//     type: actionTypes.UPDATE_CATEGORY,
//     result: data.data
//   };
// };

export const insertCategory = objCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/insertcategory",
    data: objCategory
  }).then(res => {
    dispatch(dispatch_categoryList(res));
  });
};

export const updateCategory = objCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/updatecategory",
    data: objCategory
  }).then(res => {
    dispatch(dispatch_categoryList(res));
  });
};

export const deleteCategory = objCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/deletecategory",
    data: objCategory
  }).then(res => {
    dispatch(dispatch_categoryList(res));
  });
};

export const getCategoryList = () => dispatch => {
  axios({
    method: "GET",
    url: "http://localhost:5002/api/getcategory"
  }).then(res => {
    dispatch(dispatch_categoryList(res));
  });
};
