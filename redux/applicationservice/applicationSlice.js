import { createSlice} from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {submit} from "./applicationActions.js";


const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        isLoading: false,
        submissionSuccess: false
    },
    extraReducers: (builder) => {

        builder
            .addCase(submit.pending, (state) => {
                state.isLoading = true;
                state.submissionSuccess = false;
            })
            .addCase(submit.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.submissionSuccess = true;
                toast.success(payload);
            })
            .addCase(submit.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
        
    }
})

export default applicationSlice.reducer;
