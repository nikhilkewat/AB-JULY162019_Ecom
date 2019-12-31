import * as actionTypes from "./type";
import axios from "axios";
import { store } from 'react-notifications-component';
const dispatch_Login= data => {

  return {
    type: actionTypes.FETCH_USER,
    result: data
  };
};

export const fetchUser = objUserDetails => dispatch => {
  axios({
    method: "POST",
    url: "http://localhost:5002/api/login",
    data: objUserDetails
  }).then(res => {
        let auth={
        }
        if(res.data.data.length>0){
        auth.logOut = false;
        auth.redirectToLogin = false;
        auth.redirectToApplication = true;
        auth.userData = res.data.data[0];
        auth.message = "Welcome user";
        axios.defaults.headers.common["token"] = res.data.token;
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("IsLoggedIn", true);
        }
        else{
            auth.message="Invalid Username or Password";
            store.addNotification({
                title: "Error!",
                message: "Invalid User or Password",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 3000,
                  onScreen: true
                }
              });
        }
    dispatch(dispatch_Login(auth));
  });
};
