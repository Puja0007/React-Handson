import {ActionTypes} from '../constants/action-types';

const initialState = {
    products: [],
}

const initialProductDetailsState = {
    product: {}
}

export const setproductReducers = (state=initialState, {type, payload}) =>{ 

        switch(type){
            case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;
        }
    
}

export const selectProductReducer = (state=initialProductDetailsState,{type,payload}) =>{
            switch(type){
                case ActionTypes.SELECTED_PRODUCT:
                return {...state,product:payload};
                default:
                    return state;
            }
}