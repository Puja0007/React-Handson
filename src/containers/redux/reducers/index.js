import { combineReducers } from "redux";
import { setproductReducers, selectProductReducer } from "./productReducers";


const reducers = combineReducers({
    allProducts: setproductReducers,
    selectedProduct: selectProductReducer,
})

export default reducers;