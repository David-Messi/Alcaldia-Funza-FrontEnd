


import { createSlice } from '@reduxjs/toolkit';





export const authSlice = createSlice({

    initialState: {
        status: 'not-authenticated',
        user: {},
        menu: [],
        errorMessage: undefined,
    },
    name: 'auth',
    reducers: {

        onChecking: ( state: any ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },

        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },

        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },

        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        },

        startMenu: (state, { payload }) => {
            state.menu = payload;
        }
    } 
});





export const { onChecking, onLogin, onLogout, clearErrorMessage, startMenu } = authSlice.actions;
