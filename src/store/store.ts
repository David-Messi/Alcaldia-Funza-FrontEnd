
import { configureStore } from "@reduxjs/toolkit";

import { authSlice, modalSlice, uiSlice, usuarioSlice } from  "./";




export const store = configureStore({

    reducer: {

        auth: authSlice.reducer,
        usuario: usuarioSlice.reducer,
        modal: modalSlice.reducer,


        ui: uiSlice.reducer,



    }
})