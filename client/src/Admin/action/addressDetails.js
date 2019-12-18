import * as actionTypes from './types';
import axios from 'axios';

export const insertAddress = objAddress => dispatch => {
    //console.log(objAddress);
    axios({
        method: "POST",
        url: "http://localhost:5002/api/insertaddress",
        data: objAddress
    }).then(res => {
        dispatch({
            type: actionTypes.GET_ADDRESS_LIST,
            result: res.data
        });
    });
}

export const updateAddress = objAddress => dispatch => {
    //console.log(objAddress);
    axios({
        method: "POST",
        url: "http://localhost:5002/api/updateaddress",
        data: objAddress
    }).then(res => {
        dispatch({
            type: actionTypes.GET_ADDRESS_LIST,
            result: res.data
        });
    });
}

export const getAddressList = () => dispatch => {
    axios({
        method: "GET",
        url: "http://localhost:5002/api/getaddresslist",

    }).then(res => {
        dispatch({
            type: actionTypes.GET_ADDRESS_LIST,
            result: res.data
        });
    });
}
export const deleteAddressId = (delId) => dispatch => {
    const addId = {
        id : delId
    }
    axios({
        method: "POST",
        url: "http://localhost:5002/api/deleteaddress",
        data: addId

    }).then(res => {
        dispatch({
            type: actionTypes.GET_ADDRESS_LIST,
            result: res.data
        });
    });
}