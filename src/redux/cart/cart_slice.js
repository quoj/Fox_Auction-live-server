import { createSlice } from "@reduxjs/toolkit";

const cart_slice = createSlice(
    {
        name: "cart",
        initialState:{items: []},
        reducers: {
            update_cart: (state,action)=>{
                state.items = action.payload
            },
            remove_all: (state)=> {
                state.items = []
            }
        }
    }
)
export const {update_cart,remove_all} = cart_slice.actions;
export default cart_slice.reducer;