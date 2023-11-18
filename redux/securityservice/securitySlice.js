import { createSlice } from "@reduxjs/toolkit";
import { verifyEmail, forgotPassword, resetPassword, changePassword, sendMessage } from "./securityActions";
import toast from "react-hot-toast";

const passwordSlice = createSlice({
    name: 'security',
    initialState: {
        isLoading: false,
        passwordSuccess: false,
        forgotSuccess: false,
        contactSuccess: false,
    },
    extraReducers: builder => {
        // Email Verify reducer 
        builder
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyEmail.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.emailSucess = payload;
            })
            .addCase(verifyEmail.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.errorMessage = payload;
            })

            
        // Forgot password reducer 
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.forgotSuccess = true;
                toast.success(payload);
            })
            .addCase(forgotPassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            });


        //Reset password reducer
        builder
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resetPassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.passwordSuccess = payload;
                toast.success(payload);
            })
            .addCase(resetPassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
        

        // Change password reducer
        builder
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changePassword.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.passwordSuccess = true;
                toast.success(payload);
            })
            .addCase(changePassword.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })


        // Send contact message
        builder
        .addCase(sendMessage.pending, (state) => {
            state.isLoading = true;
            state.contactSuccess = false;
        })
        .addCase(sendMessage.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.contactSuccess = true;
            toast.success(payload);
        })
        .addCase(sendMessage.rejected, (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload);
        })
    }
})

export default passwordSlice.reducer;