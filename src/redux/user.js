import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../api/user";

let initialState = {
    user:null,
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    isConnected:false,
    type:null
}


export const fetchUserById = createAsyncThunk('currentUser/fetchUserById', async ()=>{
    
    let response = await getUserById();
    return response
}

)

export const userDataSlice= createSlice({
    name:"currentUser",
    initialState,
    reducers:{
        loggout:(state,payload)=>{
            state.isConnected=true
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
            state.user=action.payload
            state.status = "succeeded";
            state.isConnected=true;
            state.type=action.payload.type
        })
        builder.addCase(fetchUserById.pending,(state,action)=>{
            state.user=action.payload
            state.status = "pending"
        })
        builder.addCase(fetchUserById.rejected,(state,action)=>{
            state.user=action.payload
            state.status = "failed"
        })
    }
    
})


export const {loggout} = userDataSlice.actions;

export default userDataSlice.reducer;