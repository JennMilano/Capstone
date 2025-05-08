import { configureStore } from "@reduxjs/toolkit";
import { api, apiSlice } from "../api/API";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    
});