import { configureStore } from "@reduxjs/toolkit";
import cart_slice from "./cart/cart_slice";
import auth_slice from "./auth/auth_slice";

const store = configureStore(
    {
        reducer: {
            cart: cart_slice,
            auth: auth_slice
        }
    }
)
export default store;