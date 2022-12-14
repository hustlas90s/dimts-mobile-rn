import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Signup } from "../../services/auth.service";

const initialState = {
    authLoading: false,
};
export const login = createAsyncThunk("app/login", async (data) => {
    const response = await Login(data);
    return response;
});

export const signup = createAsyncThunk("app/signup", async (data) => {
    const response = await Signup(data);
    return response;
});

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        onChangeState: (state, action) => {
            const { payload } = action;
            return { ...state, [payload.name]: payload.value };
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                return { ...state, authLoading: true };
            })
            .addCase(login.fulfilled, (state, action) => {
                const { payload } = action;
                return {
                    ...state,
                    authLoading: false,
                };
            })
            .addCase(login.rejected, (state) => {
                return { ...state, authLoading: false };
            })

            //Signup
            .addCase(signup.pending, (state) => {
                return { ...state, authLoading: true };
            })
            .addCase(signup.fulfilled, (state, action) => {
                const { payload } = action;
                return {
                    ...state,
                    authLoading: false,
                };
            })
            .addCase(signup.rejected, (state) => {
                return { ...state, authLoading: false };
            });
    },
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
