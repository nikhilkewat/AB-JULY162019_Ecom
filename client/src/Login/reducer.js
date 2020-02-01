import * as actionTypes from "./type";
const initialstate={

};
export const auth=(state=initialstate,action)=>{
    switch(action.type){
        case actionTypes.FETCH_USER:
            return {...state,...action.result}
        default:
            return state;
    }
}
