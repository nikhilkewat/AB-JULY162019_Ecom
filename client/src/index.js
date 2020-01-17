import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose,combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./Admin/reducer";
import {auth} from "./Login/AuthReducer";
import clientreducer from "./Client/reducer";

import './index.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { category, categoryList } from "./Admin/reducer/Category";
import { userDetails, userDetailsList } from "./Admin/reducer/UserDetails";
//import {newreducers} from "./newfile"
import { address } from "./Admin/reducer/addressDetails";
import { addressDetailsList } from "./Admin/reducer/addressDetails";
//product category
import {
  productcategory,
  productcategoryList,
  productList
} from "./Admin/reducer/ProductCategory";
import adminreducer from "./Admin/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const s = {clientreducer}
console.log(s);
const rootReducer = combineReducers({
  category,
  categoryList,
  userDetails,
  userDetailsList,
  address,
  addressDetailsList,
  productcategory,
  productcategoryList,
  productList,
  //adminreducer,
  clientreducer,
  auth
})


const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
  );


ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
