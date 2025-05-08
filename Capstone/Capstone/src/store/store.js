import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/API";
import authReducer from "../redux/authSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    
});