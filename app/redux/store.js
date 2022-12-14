import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";

const store = configureStore({
    reducer: { appState: appSlice },
});

export default store;
