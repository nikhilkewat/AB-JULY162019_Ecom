import { combineReducers } from "redux";
import {category,categoryList} from "./Category";
import {userDetails, userDetailsList} from "./UserDetails";
//import {newreducers} from "./newfile"
import { address } from './addressDetails';
import { addressDetailsList } from './addressDetails';

export default combineReducers({
    category,
    categoryList,
    userDetails,
    userDetailsList
})