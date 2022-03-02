import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {BaseUrl} from "../ServerApi/BaseUrl";



export const fetchPost = createAsyncThunk('postSlice/fetchData' , async ()=> {

   return (await BaseUrl().get('posts')).data.filter(value => value.id <=10)

})


const postAdapter = createEntityAdapter({
    selectId : state => state.id
})

const initialState = postAdapter.getInitialState({
    postStatus : 'idle'
})


export const {selectIds : selectPostIds , selectById : selectPostById} = postAdapter.getSelectors(state => state.postSlice)


const postSlice = createSlice({
    name : 'postSlice' ,
    initialState,
    reducers  : {},
    extraReducers : {

        [fetchPost.pending] : (state)=>
        {
         state.postStatus = 'pending'
        },
        [fetchPost.fulfilled] : (state , {payload})=>
        {
            state.postStatus = 'success'

            // console.log(payload)

            postAdapter.upsertMany(state , payload)

        },
        [fetchPost.rejected] : (state)=>
        {

        }

    }
})


export default postSlice.reducer

