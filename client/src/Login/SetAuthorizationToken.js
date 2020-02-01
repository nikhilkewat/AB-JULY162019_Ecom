import axios from "axios";

export default token => {
  if (token) {
      console.log(token);
    axios.defaults.headers.common["token"] = token;
  } else {
    //delete axios.defaults.headers.common["token"];
  }
};
