import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import {cartred} from "./reducers/cartreducer"
import {orderReducer,getordersReducer} from"./reducers/orderReducer.js"
import { adminReducer } from "./reducers/adminreducer.js";
const store=configureStore({
    reducer:{
        auth:authReducer,
        cartdata:cartred,
        orders:orderReducer,
        getorders:getordersReducer,
        getadmin:adminReducer
    },
})
export default store;
export const server="https://brewery-backend.onrender.com/api/v1";