import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Signup } from "../../services/auth.service";
import { GetProfile, UpdateProfile } from "../../services/profile.service";
import { GetSchedules } from "../../services/schedule.service";

const initialState = {
    authLoading: false,
    profileLoading: false,
    profile: {},
    citizenCases : []
};

export const login = createAsyncThunk("app/login", async (data) => {
    console.log(data);
    const response = await Login(data);
    return response;
});

export const signup = createAsyncThunk("app/signup", async (data) => {
    const response = await Signup(data);
    return response;
});

export const getProfile = createAsyncThunk("app/getProfile", async () => {
    const response = await GetProfile();
    return response;
});

export const getSchedules = createAsyncThunk("app/getSchedules", async () => {
    const response = await GetSchedules();
    return response;
});

export const updateProfile = createAsyncThunk(
    "app/updateProfile",
    async (data) => {
        const response = await UpdateProfile(data);
        return response;
    }
);

export const getCitizenCases = createAsyncThunk(
    "app/getCitizenCases",
    async () => {
        return await GetCitizenCases()
    }
)

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
            })

            //Get Profile
            .addCase(getProfile.pending, (state) => {
                return { ...state, profileLoading: true };
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                const { payload } = action;
                return {
                    ...state,
                    profileLoading: false,
                    profile: payload,
                };
            })
            .addCase(getProfile.rejected, (state) => {
                return { ...state, profileLoading: false };
            })

            //Update Profile
            .addCase(updateProfile.pending, (state) => {
                return { ...state, profileLoading: true };
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                const { payload } = action;
                return {
                    ...state,
                    profileLoading: false,
                };
            })
            .addCase(updateProfile.rejected, (state) => {
                return { ...state, profileLoading: false };
            })

            // Get Citizen Cases
            .addCase(getCitizenCases.pending, (state) => {
                return { ...state, profileLoading: true };
            })
            .addCase(getCitizenCases.fulfilled, (state, action) => {
                const { payload } = action;
                return {
                    ...state,
                    profileLoading: false,
                    citizenCases : payload
                };
            })
            .addCase(getCitizenCases.rejected, (state) => {
                return { ...state, profileLoading: false };
            });
    },
});

//Helpers
// const validateNullValues = (payload) => {
//     const newState = {};
//     for (const key in payload) {
//         if (payload[key]) {
//             newState[key] = payload[key];
//         }
//     }
//     return newState;
// };

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
