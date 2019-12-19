import { combineReducers } from "redux";
import { category, categoryList } from "./Category"
//import {newreducers} from "./newfile"
import { address } from './addressDetails';
import { addressDetailsList } from './addressDetails';

export default combineReducers({
    category,
    categoryList,
    addressDetailsList,
    address
})