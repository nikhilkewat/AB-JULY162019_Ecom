import { combineReducers } from "redux";
import {category,categoryList} from "./Category";
import {userDetails, userDetailsList} from "./UserDetails";
//import {newreducers} from "./newfile"

export default combineReducers({
    category,
    categoryList,
    userDetails,
    userDetailsList
})