import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    authLoading: false,
};
// export const adminLogin = createAsyncThunk("app/adminLogin", async (creds) => {
//     const response = await AdminLogin(creds);
//     return {
//         success: response.access_token ? true : false,
//     };
// });

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        onChangeState: (state, action) => {
            const { payload } = action;
            return { ...state, [payload.name]: payload.value };
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         //Admin Login
    //         .addCase(adminLogin.pending, (state) => {
    //             return { ...state, loginLoading: true };
    //         })
    //         .addCase(adminLogin.fulfilled, (state, action) => {
    //             const { payload } = action;
    //             return {
    //                 ...state,
    //                 loginLoading: false,
    //                 loginSuccess: payload.success,
    //                 loginError: payload.success,
    //                 errorToast: {
    //                     show: payload.success ? false : true,
    //                     message: payload.success
    //                         ? ""
    //                         : "Invalid email or password",
    //                 },
    //             };
    //         })
    //         .addCase(adminLogin.rejected, (state) => {
    //             return { ...state, loginLoading: false };
    //         });
    // },
});

//Helpers
const validateNullValues = (payload) => {
    const newState = {};
    for (const key in payload) {
        if (payload[key]) {
            newState[key] = payload[key];
        }
    }
    return newState;
};

export const {
    onChangeState,
    onSubmitAdmin,
    onResetAllState,
    onSubmitGuard,
    onSubmitOwner,
    onSubmitVehicle,
    onResetAdminState,
    onResetGuardState,
    onResetOwnerState,
    onResetVehicleState,
} = appSlice.actions;

export default appSlice.reducer;
