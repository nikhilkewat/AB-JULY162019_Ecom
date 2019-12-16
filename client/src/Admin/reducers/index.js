import { combineReducers } from 'redux';

import {insertAddress} from './addressDetails';   
import {addressDetailsList} from './addressDetails';
import {deleteAddress} from './addressDetails';

export default combineReducers({
   insertAddress,
   addressDetailsList,
   deleteAddress
})