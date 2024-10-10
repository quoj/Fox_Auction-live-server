import { createSlice } from "@reduxjs/toolkit";

const auth_slice = createSlice(
    {
        name: "auth",
        initialState: {jwt:""},
        reducers: {
            authenticate: (state,action)=>{
                state.jwt = action.payload;
            }
        }
    }
)
export const {authenticate} = auth_slice.actions;
export default auth_slice.reducer;