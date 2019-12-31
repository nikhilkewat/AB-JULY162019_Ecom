import { combineReducers } from "redux";
import {category,categoryList} from "./Category";
import {userDetails, userDetailsList} from "./UserDetails";
//import {newreducers} from "./newfile"
import { address } from './addressDetails';
import { addressDetailsList } from './addressDetails';
//product category
import {productcategory,productcategoryList,productList} from "./ProductCategory";
//Login
import {auth} from "../../Login/reducer";

export default combineReducers({
    category,
    categoryList,
    userDetails,
    userDetailsList,
    address,
    addressDetailsList,
    productcategory,
    productcategoryList,
    productList,
    auth
})
