import * as actionTypes from '../action/types';

const initialState = {
    data: []
}

export const address = (state = initialState, action) => {
    if (action.type === actionTypes.INSERT_ADDRESS) {
        return {
            ...state,
            ...action.result
        }
    } if (action.type === actionTypes.UPDATE_ADDRESS) {
        return {
            ...state,
            ...action.result
        }
    } else if (action.type === actionTypes.DELETE_ADDRESS) {
        return {
            ...state,
            ...action.result
        }
    }
    return state;
}

export const addressDetailsList = (state = initialState, action) => {
    if (action.type === actionTypes.GET_ADDRESS_LIST) {
        return {
            ...state,
            ...action.result
        }
    }
    return state;
}
