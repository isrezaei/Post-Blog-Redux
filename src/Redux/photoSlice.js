import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {BaseUrl} from "../ServerApi/BaseUrl";
import {fetchUser} from "./userSlice";



export const fetchPhoto = createAsyncThunk('photoSlice/fetchData' , async ()=> {

    return (await BaseUrl().get('photos')).data.filter(value => value.id <=10)

})


const photoAdapter = createEntityAdapter({
    selectId : state => state.id
})

const initialState = photoAdapter.getInitialState({
    photoStatue : 'idle'
})


export const {selectIds : selectPhotoIds , selectById : selectPhotoById} = photoAdapter.getSelectors(state => state.photoSlice)


const photoSlice = createSlice({
    name : 'photoSlice' ,
    initialState,
    reducers  : {},
    extraReducers : {

        [fetchPhoto.pending] : (state)=>
        {
            state.photoStatue = 'pending'
        },
        [fetchPhoto.fulfilled] : (state , {payload})=>
        {
            state.photoStatue = 'success'

            // console.log(payload)

            photoAdapter.upsertMany(state , payload)

        },
        [fetchPhoto.rejected] : (state)=>
        {

        }

    }
})


export default photoSlice.reducer