import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//middelware..
export const fetchUser = createAsyncThunk(
    "fetchcontent",
    async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        return res.data.data
    }
)


const contentSlice = createSlice({
    name:"content",
    initialState:{

        data:null,
        error:null,
        isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state,action)=>{
            state.isLoading = true
            //action...
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.isLoading =false
            state.error =action.payload
        })
    }

})
export default contentSlice.reducer