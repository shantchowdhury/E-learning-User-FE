import { createSlice} from "@reduxjs/toolkit";
import {
    fetchSponsors, 
    fetchFaqs, 
    fetchMembers, 
    fetchTestimonials, 
    fetchPosts,
fetchCourses} from "./fetchActions.js";


const fetchSlice = createSlice({
    name: 'app',
    initialState: {
        sponsors: [],
        faqs: [],
        members: [],
        testimonials: [],
        posts: [], 
        courses: [],
        isEnrolled: false,
        course: {},
        videoUrl:"https://www.youtube.com/embed/BhdP2nPeSAM",
        isLoading: false
    },
    reducers: {
        // Add your reducers here
        setCourses:(state,action)=>{
            state.courses=action.payload
        },
        setCourse:(state,action)=>{
            state.course=action.payload
        },
        setVideoUrl:(state,action)=>{
            state.videoUrl=action.payload
        },
        setEnrolled:(state,action)=>{
            state.isEnrolled=action.payload
        }
        
    },
    extraReducers: (builder) => {

        // Fetch Sponsor action
        builder
            .addCase(fetchSponsors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSponsors.fulfilled, (state, {payload}) => {
                state.sponsors = payload;
                state.isLoading = false;
            })
            .addCase(fetchSponsors.rejected, (state) => {
                state.isLoading = false;
            })

        // Fetch Testimonial action
        builder
            .addCase(fetchTestimonials.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTestimonials.fulfilled, (state, {payload}) => {
                state.testimonials = payload;
                state.isLoading = false;
            })
            .addCase(fetchTestimonials.rejected, (state) => {
                state.isLoading = false;
            })

        // Fetch Faq action
        builder
            .addCase(fetchFaqs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFaqs.fulfilled, (state, {payload}) => {
                state.faqs = payload;
                state.isLoading = false;
            })
            .addCase(fetchFaqs.rejected, (state) => {
                state.isLoading = false;
            })

        // Fetch Team action
        builder
            .addCase(fetchMembers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMembers.fulfilled, (state, {payload}) => {
                state.members = payload;
                state.isLoading = false;
            })
            .addCase(fetchMembers.rejected, (state) => {
                state.isLoading = false;
            })

        // Fetch Posts action
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, {payload}) => {
                state.posts = payload;
                state.isLoading = false;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading = false;
            })
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, {payload}) => {
                state.courses = payload;
                state.isLoading = false;
            })
            .addCase(fetchCourses.rejected, (state) => {
                state.isLoading = false;
            })

    }
})

export default fetchSlice.reducer;
export const {setCourses,setCourse,setVideoUrl,setEnrolled}=fetchSlice.actions
