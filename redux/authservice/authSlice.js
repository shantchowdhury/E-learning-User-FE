import { createSlice} from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { 
    fetchUser, 
    signup, 
    signin, 
    googleSignin,
    logout,
    resend, 
    updateProfile,
    updateEmail, 
    updatePhone, 
    profileUpload, 
    cvUpload, 
    cvDelete, 
    googleDisconnect,
    deactivate
} from "./authActions";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        fetch: false,

        isLoading: false,
        googleLoading: false,
        profileLoading: false,
        deactivateLoading: false,
        cvLoading: false,
        nameLoading: false,
        phoneLoading: false,
        emailLoading: false, 
        resendLoading: false,
    },
    extraReducers: (builder) => {

        // Fetch User action
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.fetch = true;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.fetch = true;
                // localStorage.removeItem('user');
                state.isLoading = false;
            })
            
        // Register reducer 
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, {payload}) => {
                state.user = payload;
                localStorage.setItem('user', payload.Name);
                state.isLoggedIn = true;
                state.isLoading = false;
                toast.success('Your account has been created');
            })
            .addCase(signup.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            });

        // Login reducer 
        builder
            .addCase(signin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signin.fulfilled, (state, {payload}) => {
                console.log(payload)
                // localStorage.setItem('token', payload.token);
                state.student = payload.student;
                localStorage.setItem('user', payload.student.Name);
                // setSecureHttpOnlyCookie('access_token', payload.token, 1);
                state.isLoggedIn = true;
                state.isLoading = false;
                state.user = payload.student;
                toast.success('You are Logged In');
            })
            .addCase(signin.rejected, (state, {payload}) => {
                state.isLoading = false;
                console.log(payload)
                // localStorage.removeItem('user');
                toast.error(payload);
            });

        // Google Login reducer 
        builder
            .addCase(googleSignin.pending, (state) => {
                state.googleLoading = true;
            })
            .addCase(googleSignin.fulfilled, (state, {payload}) => {
                state.user = payload;
                localStorage.setItem('user', payload.Name);
                state.isLoggedIn = true;
                state.googleLoading = false;
                toast.success('You are Logged In');
            })
            .addCase(googleSignin.rejected, (state, {payload}) => {
                state.googleLoading = false;
                toast.error(payload);
            });

        // Logout reducer 
        builder.addCase(logout.fulfilled, (state) => {
            state.user= null;
            localStorage.removeItem('user');
            document.cookie=""
            state.isLoggedIn= false;
        });
        
       
        // Email resend reducer
        builder
            .addCase(resend.pending, (state) => {
                state.resendLoading = true;
            })
            .addCase(resend.fulfilled, (state, {payload}) => {
                state.resendLoading = false;
                toast.success(payload)
            })
            .addCase(resend.rejected, (state, {payload}) => {
                state.resendLoading = false;
                toast.error(payload);
            });
        

        // Profile update reducer
        builder
            .addCase(updateProfile.pending, (state) => {
                state.nameLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, {payload}) => {
                state.user.Name = payload.Name;
                state.user.Address = payload.Address; 
                state.nameLoading = false;
                toast.success('Profile Updated');
            })
            .addCase(updateProfile.rejected, (state, {payload}) => {
                state.nameLoading = false;
                toast.error(payload);
            })


        // Phone update reducer 
        builder
            .addCase(updatePhone.pending, (state) => {
                state.phoneLoading = true;
            })
            .addCase(updatePhone.fulfilled, (state, {payload}) => {
                state.user.Phone = payload.Phone; 
                state.phoneLoading = false;
                toast.success('Phone number updated');
            })
            .addCase(updatePhone.rejected, (state, {payload}) => {
                state.phoneLoading = false;
                toast.error(payload);
            })


        // Email update reducer
        builder
            .addCase(updateEmail.pending, (state) => {
                state.emailLoading = true;
            })
            .addCase(updateEmail.fulfilled, (state, {payload}) => {
                state.user.Email = payload.Email; 
                state.user.verified = payload.verified;
                state.user.login_type = payload.login_type;
                state.emailLoading = false;
                toast.success('Email updated. Please verify');
            })
            .addCase(updateEmail.rejected, (state, {payload}) => {
                state.emailLoading = false;
                toast.error(payload);
            })


        // Profile picture upload reducer
        builder
            .addCase(profileUpload.pending, (state) => {
                state.profileLoading = true;
            })
            .addCase(profileUpload.fulfilled, (state, {payload}) => {
                state.user.profile_image = payload;
                state.profileLoading = false;
                toast.success('Photo uploaded');
            })
            .addCase(profileUpload.rejected, (state, {payload}) => {
                state.profileLoading = false;
                toast.error(payload);
            });


        // CV upload reducer
        builder
            .addCase(cvUpload.pending, (state) => {
                state.cvLoading = true;
            })
            .addCase(cvUpload.fulfilled, (state, {payload}) => {
                state.user.CV = payload;
                state.cvLoading = false;
            })
            .addCase(cvUpload.rejected, (state, {payload}) => {
                state.cvLoading = false;
                toast.error(payload);
            });


        // CV Delete reducer
        builder
            .addCase(cvDelete.pending, (state) => {
                state.cvLoading = true;
            })
            .addCase(cvDelete.fulfilled, (state, {payload}) => {
                state.user.CV = '';
                state.cvLoading = false;
                toast.success(payload);
            })
            .addCase(cvDelete.rejected, (state, {payload}) => {
                state.cvLoading = false;
                toast.error(payload);
            });


        // Google disconnect reducer 
        builder
            .addCase(googleDisconnect.pending, (state) =>{
                state.googleLoading = true;
            })
            .addCase(googleDisconnect.fulfilled, (state, {payload}) => {
                state.user.login_type = payload.login_type;
                state.googleLoading = false;
                toast.success('Google Disconnected');
            })
            .addCase(googleDisconnect.rejected, (state, {payload}) => {
                state.googleLoading = false;
                toast.error(payload);
            })

        // Account deactivate reducer 
        builder
            .addCase(deactivate.pending, (state) =>{
                state.deactivateLoading = true;
            })
            .addCase(deactivate.fulfilled, (state, {payload}) => {
                state.user = null;
                state.deactivateLoading = false;
                state.isLoggedIn = false;
                toast.success(payload, {icon: '😟'});
            })
            .addCase(deactivate.rejected, (state, {payload}) => {
                state.deactivateLoading = false;
                toast.error(payload);
            })
        
    }
})

function setSecureHttpOnlyCookie(name, value, expiresInDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expiresInDays);

    const cookieValue = encodeURIComponent(value) + (expiresInDays ? '; expires=' + expirationDate.toUTCString() : '') + '; path=/; Secure; HttpOnly';

    document.cookie = name + '=' + cookieValue;
    console.log("cookie set")
  }

export default authSlice.reducer;
