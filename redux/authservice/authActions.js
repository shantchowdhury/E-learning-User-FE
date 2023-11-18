import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET, POST, PUT, DELETE, UPLOAD} from '../api.js';


export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const user = await GET('/api/student/get');
    return user.data;
})

export const signin = createAsyncThunk('auth/signin', async({data, navigate}, {rejectWithValue}) => {
    try {
        const user = await POST('/api/student/signin', data);
        console.log("hellooo")
        console.log(user.data)
        document.cookie = `token=${user.data.token}; path=/;`;
        localStorage.setItem('token', user.data.token);
        return user.data
        navigate('/u/dashboard');
        
        return true
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const signup = createAsyncThunk('auth/signup', async ({data, navigate}, {rejectWithValue}) => {
    try {
       const user = await POST('/api/student/signup', data);
       navigate.push('/u/dashboard');
    // navigate.push("/signin")
    
       return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const googleSignin = createAsyncThunk('auth/googleSignin', async ({data, navigate}, {rejectWithValue}) => {
    try {
       const user = await POST('/api/student/googleSignin', data);
       navigate('/u/dashboard');
       return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const logout = createAsyncThunk('auth/logout', async (navigate) => {
   const result = await GET('/api/student/logout');
    localStorage.removeItem('user');
    
   navigate.push('/');
   return result.data;
})

export const resend = createAsyncThunk('auth/resend', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/verification/resend');
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data); 
    }
})

export const updateProfile = createAsyncThunk('auth/updateProfile', async (data, {rejectWithValue}) => {
    try {
        const result = await PUT('/api/profile/updateProfile', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const updatePhone = createAsyncThunk('auth/updatePhone', async(data, {rejectWithValue}) => {
    try {
        const result = await PUT('/api/profile/updatePhone', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const updateEmail = createAsyncThunk('auth/updateEmail', async(data, {rejectWithValue}) => {
    try {
        const result = await PUT('/api/profile/updateEmail', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const profileUpload = createAsyncThunk ('auth/profileUpload', async (data, {rejectWithValue}) => {
    try {
        const result = await UPLOAD('/api/upload/profileUpload', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const cvUpload = createAsyncThunk ('auth/cvUpload', async (data, {rejectWithValue}) => {
    try {
        const result = await UPLOAD('/api/upload/cvUpload', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const cvDelete = createAsyncThunk('auth/deleteCV', async(data, {rejectWithValue}) => {
    try {
        const result = await DELETE('/api/deleteFile/deleteCV');
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const googleDisconnect = createAsyncThunk('auth/diconnect', async (data, {rejectWithValue}) => {
    try {
       const user = await PUT('/api/security/googleDisconnect', {});
       return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const deactivate = createAsyncThunk('auth/deactivate', async ({Password, navigate}, {rejectWithValue}) => {
    try {
        const result = await PUT('/api/settings/deactivate', {Password});
        navigate('/');
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})