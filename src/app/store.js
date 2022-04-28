import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../services/post";

export const store=configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
   // middleware:(getDefaultMiddleware)=>{
      //  getDefaultMiddleware().concat(postApi.//middleware)

   // }
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),

})
setupListeners(store.dispatch)