
import { createSlice } from '@reduxjs/toolkit';


export const uiSlice = createSlice({

    name: 'ui',
    initialState: {
        isSidebarOpen: false
    },
    
    reducers: {
        onOpenSidebar: ( state ) => {
            state.isSidebarOpen = true;
        },

        onCloseSidebar: ( state ) => {
            state.isSidebarOpen = false;
        }
        // onOpenDateModal: ( state ) => {
        //     state.isDateModalOpen = true;
        // },

        // onCloseDateModal: ( state ) => {
        //     state.isDateModalOpen = false;
        // },
    }
});




export const { onOpenSidebar, onCloseSidebar } = uiSlice.actions;