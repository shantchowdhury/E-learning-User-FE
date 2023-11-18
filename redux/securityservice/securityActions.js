import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET, POST, PUT} from '../api.js';

export const verifyEmail = createAsyncThunk('security/verifyEmail',async ({studentId, token}, {rejectWithValue}) => {
    try {
        const result = await GET(`/api/verification/${studentId}/${token}`);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const forgotPassword = createAsyncThunk('password/forgot', async (data, {rejectWithValue}) => {
    try {
        const result = await POST('/api/student/forgot', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const resetPassword = createAsyncThunk('password/reset', async ({studentId, token, Password, confirmPass}, {rejectWithValue}) => {
 try {
    const result = await PUT(`/api/student/reset/${studentId}/${token}`, {
        Password, 
        confirmPass
    })
    return result.data;
 } catch (error) {
    return rejectWithValue(error.response.data);
 }
})

export const changePassword = createAsyncThunk('password/change', async(data, {rejectWithValue}) => {
    try {
        const result = await PUT('/api/security/changePassword', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const sendMessage = createAsyncThunk('contact/send', async (data, {rejectWithValue}) => {
    try {
        const result = await POST('/api/contact', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})