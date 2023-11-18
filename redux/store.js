import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './authservice/authSlice.js';
import SecurityReducer from "./securityservice/securitySlice";
import ApplicationReducer from "./applicationservice/applicationSlice";
import fetchReducer from './fetchService/fetchSlice.js';

const store = configureStore({
   reducer: {
     auth: AuthReducer,
     security: SecurityReducer,
     application: ApplicationReducer,
     app: fetchReducer
   }
})

export default store;