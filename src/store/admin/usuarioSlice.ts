



import { createSlice } from '@reduxjs/toolkit';



export const usuarioSlice = createSlice({

    name: 'usuario',
    initialState: {
        isLoadingUsuario: false,
        usuarios: [],
        clientes: [],
        activeUsuario: null
    },

    reducers:{
        
        onSetActiveUsuario: ( state, { payload } ) => {
            state.isLoadingUsuario = false;
            state.activeUsuario = payload;
        },

        onSetDesactiveUsuario: ( state ) => {
            state.isLoadingUsuario = false;
            state.activeUsuario = null;
        },

        
        onAddNewUsuario: ( state: any, { payload }) => {
            state.usuarios.push( payload );
            state.activeUsuario = null;
        },

        onUpdateUsuario: ( state: any, { payload } ) => {
            state.usuarios = state.usuarios.map( (user: any) => {
                if( user.uid === payload.uid ){
                    return payload
                }else {
                    return user
                }
            });
        },

        onLoandingUsuario: ( state, { payload = [] } ) => {
            state.isLoadingUsuario = false;
            state.usuarios = payload;
        },


        onLoandingCliente: ( state, { payload = [] } ) => {
            state.isLoadingUsuario = false;
            state.clientes = payload;
        },

        onLoanding: ( state ) => {
            state.isLoadingUsuario = true;
            state.usuarios = [];
            state.clientes = [];
            state.activeUsuario = null;
        },

        onDeleteUsuario: ( state: any, { payload } ) => {
            state.usuarios = state.usuarios.filter( (user: any) => user.uid !== payload.uid );
        }
    }
});





export const { onSetActiveUsuario, onAddNewUsuario, onUpdateUsuario, onLoandingUsuario, onDeleteUsuario, onLoandingCliente, onLoanding, onSetDesactiveUsuario } = usuarioSlice.actions;