import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data : []
}

export const insertAddress = (state = initialState, action) => {
    if(action.type === actionTypes.INSERT_ADDRESS){
        return{
            ...state,
            ...action.result    
        }
    }
    return state;
}

export const addressDetailsList = (state = initialState, action) => {
    if(action.type === actionTypes.GET_ADDRESS_LIST){
        return{
            ...state,
            ...action.result 
        }
    }
    return state;
}
export const deleteAddress = (state = initialState, action) => {
    if(action.type === actionTypes.DELETE_ADDRESS){
        return{
            ...state,
            ...action.result    
        }
    }
    return state;
}