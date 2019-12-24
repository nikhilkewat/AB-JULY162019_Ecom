import * as actionTypes from "./types";
import axios from "axios";

export const insertUserDetail = objUserDetail => dispatch => {  
  axios({
    method: "POST",
    url: "http://localhost:5002/api/insertuserdetail",
    data: objUserDetail
  }).then(res => {
    dispatch({
      type: actionTypes.INSERT_USER_DETAILS,
      result: res.data
    });
  });
};

export const updateUserDetail = objUserDetail => dispatch => {  
  axios({
    method: "POST",
    url: "http://localhost:5002/api/updateuserdetail",
    data: objUserDetail
  }).then(res => {
    dispatch({
      type: actionTypes.UPDATE_USER_DETAILS,
      result: res.data
    });
  });
};

export const getUserDetail = () => dispatch => {  
    axios({
      method: "GET",
      url: "http://localhost:5002/api/getuserdetail",
     
    }).then(res => {
      dispatch({
        type: actionTypes.GET_USER_DETAILS_LIST,
        result: res.data
      });
    });
  };

  export const deleteUserDetail = objUserDetail => dispatch => {  
    axios({
      method: "POST",
      url: "http://localhost:5002/api/deleteuserdetail",
      data: objUserDetail
    }).then(res => {
      dispatch({
        type: actionTypes.DELETE_USER_DETAILS,
        result: res.data
      });
    });
  };