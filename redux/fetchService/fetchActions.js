import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET} from '../api.js'

export const fetchSponsors = createAsyncThunk('fetch/sponsors', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/fetch/sponsors');
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const fetchFaqs = createAsyncThunk('fetch/faqs', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/fetch/faqs');
        console.log(user)
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const fetchTestimonials = createAsyncThunk('fetch/testimonials', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/fetch/testimonials');
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const fetchMembers = createAsyncThunk('fetch/members', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/fetch/members');
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const fetchPosts = createAsyncThunk('fetch/posts', async (data, {rejectWithValue}) => {
    try {
        const user = await GET('/api/fetch/posts');
        return user.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
// const res=await axios.get(`${process.env.API_2}/api/course`)
//       setCourses(res.data)
export const fetchCourses=createAsyncThunk('fetch/courses',async(data,{rejectWithValue})=>{
    try{
        const user=await GET('/api/course')
        return user.data
    }catch(error){
        return rejectWithValue(error.response.data)
    }
})