import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { cartReducer } from './reducers/cartReducers';
import Cookies from 'js-cookie';


console.log(Cookies.get("cartItems"));
const cartItems = JSON.parse(Cookies.get("cartItems") || '[]');

const initialState = {cart:{cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
