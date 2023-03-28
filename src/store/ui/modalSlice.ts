



import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({

    name: 'modal',
    initialState: {
        modalUsuario: false
    },
    
    reducers: {
        openModalUsuario: ( state ) => {
            state.modalUsuario = true;
        },

        closeModalUsuario: ( state ) => {
            state.modalUsuario = false;
        }
        // onOpenDateModal: ( state ) => {
        //     state.isDateModalOpen = true;
        // },

        // onCloseDateModal: ( state ) => {
        //     state.isDateModalOpen = false;
        // },
    }
});




export const { openModalUsuario, closeModalUsuario } = modalSlice.actions;