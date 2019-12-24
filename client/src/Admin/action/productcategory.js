import * as actionTypes from "./types";
import axios from "axios";

const dispatch_productcategoryList = data => {

  return {
    type: actionTypes.GET_PRODUCTCATEGORY_LIST,
    result: data.data
  };
};

export const insertProductCategory = objProductCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/insertpcategory",
    data: objProductCategory
  }).then(res => {
    dispatch(dispatch_productcategoryList(res));
  });
};

export const updateProductCategory = objProductCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/updatepcategory",
    data: objProductCategory
  }).then(res => {
    dispatch(dispatch_productcategoryList(res));
  });
};

export const deleteProductCategory = objProductCategory => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/deletepcategory",
    data: objProductCategory
  }).then(res => {
    dispatch(dispatch_productcategoryList(res));
  });
};

export const getProductCategoryList = () => dispatch => {

  axios({
    method: "GET",
    url: "http://localhost:5002/api/getpcategory"
  }).then(res => {

    dispatch(dispatch_productcategoryList(res));

  });
};

//get Category List for Drop Down
const dispatch_categoryList = data => {

  return {
    type: actionTypes.GET_CATEGORY_LIST,
    result: data.data
  };
};

export const getCategoryList = () => dispatch => {

  axios({
    method: "GET",
    url: "http://localhost:5002/api/getcategory"
  }).then(res => {

    dispatch(dispatch_categoryList(res));

  });
};

//get Product List for Drop Down
const dispatch_productList = data => {

  return {
    type: actionTypes.GET_PRODUCT_LIST,
    result: data.data
  };
};

export const getProductList = () => dispatch => {

  axios({
    method: "GET",
    url: "http://localhost:5002/api/getproduct"
  }).then(res => {

    dispatch(dispatch_productList(res));

  });
};
