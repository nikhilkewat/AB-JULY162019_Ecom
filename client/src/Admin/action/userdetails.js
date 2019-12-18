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

export const getUserDetails = () => dispatch => {  
    axios({
      method: "GET",
      url: "http://localhost:5002/api/getuserdetails",
     
    }).then(res => {
      dispatch({
        type: actionTypes.GET_USER_DETAILS,
        result: res.data
      });
    });
  };