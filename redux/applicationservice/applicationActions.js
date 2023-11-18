import { createAsyncThunk } from "@reduxjs/toolkit";
import { UPLOAD } from "../api";

export const submit = createAsyncThunk ('applicaiton/submit', async (data, {rejectWithValue}) => {
    try {
        const result = await UPLOAD('/api/application/submit', data);
        return result.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})