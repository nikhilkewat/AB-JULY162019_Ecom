import axios from "axios";
import { FETCH_USER } from "./types";
import SetAuthorizationToken from "./SetAuthorizationToken";
import { store } from 'react-notifications-component';

const dispatch_auth = data => {
    
    return {
      type: FETCH_USER,
      result: data
    };
  };

export const fetchUser = objUserDetails => async dispatch => {
    await axios({
      method: "post",
      url: "http://localhost:5002/api/login",
      data: {
        UserName: objUserDetails.username,
        Password: objUserDetails.password,
       
      }
    })
      .then(res => {
          
        let auth = {};
          
        if (res.data.data.length>0) {
         
            try {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("IsLoggedIn", true);
              
              SetAuthorizationToken(res.data.token);
              auth.logOut = false;
              auth.redirectToLogin = false;
              auth.redirectToApplication = true;
              auth.userData = res.data.data[0];
              auth.message = "Welcome user";
              //axios.defaults.headers.common["token"] = res.data.token;
             // dispatch({ type: FETCH_USER,result: auth});
             dispatch(dispatch_auth(auth));
              
            } catch (exc) {
              console.log("exception", exc);
            }         
         
        } else {
          
          auth.message = "Invalid username or password";
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
          //dispatch({ type: FETCH_USER,result: auth});
          dispatch(dispatch_auth(auth));
          
        }
      })
      .catch(e => {
        console.log("catch error", JSON.stringify(e));
      });
  };

