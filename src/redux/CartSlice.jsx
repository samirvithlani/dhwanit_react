import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //actions..
        //state -->initialState value
        //action -->2 param --1)type 2)payload
        addToCart:(state,action)=>{
            console.log("state..",state)
            console.log("action..",action) //action.payload
            state.cart.push(action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer