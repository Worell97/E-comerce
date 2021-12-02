import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { cartReducer } from './reducers/cartReducers';
import Cookies from 'js-cookie';
import userSigninReducer from './reducers/userReducer';

const cartItemsText = Cookies.get("cartItems") || ''; 
const userInfoText = Cookies.get("userInfo") || null;
const cartItems = (cartItemsText !== '') ?  JSON.parse(cartItemsText) : [];
const userInfo = (userInfoText !== '') ?  JSON.parse(userInfoText) : null;

const initialState = {cart: {cartItems}, userSignin: { userInfo }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
