import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import photoSlice from "./photoSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer : {
        postSlice,
        photoSlice,
        userSlice
    }
})