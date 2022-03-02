import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {BaseUrl} from "../ServerApi/BaseUrl";



export const fetchUser = createAsyncThunk('userSlice/fetchData' , async ()=> {

    return (await BaseUrl().get('users')).data

})


const userAdapter = createEntityAdapter({
    selectId : state => state.id
})

const initialState = userAdapter.getInitialState({
    userStatue : 'idle'
})


export const {selectIds : selectUserIds , selectById : selectUserById} = userAdapter.getSelectors(state => state.userSlice)


const userSlice = createSlice({
    name : 'userSlice' ,
    initialState,
    reducers  : {},
    extraReducers : {

        [fetchUser.pending] : (state)=>
        {
          state.userStatue = 'pending'
        },

        [fetchUser.fulfilled] : (state , {payload})=>
        {
            state.userStatue = 'success'

            // console.log(payload)

            userAdapter.upsertMany(state , payload)

        },
        [fetchUser.rejected] : (state)=>
        {

        }

    }
})


export default userSlice.reducer