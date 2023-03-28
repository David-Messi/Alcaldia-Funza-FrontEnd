
import { useDispatch, useSelector } from 'react-redux';

import { usuariosApi } from '../api';
import { onChecking, onLogin, onLogout } from '../store';

import Swal from 'sweetalert2';





export const useAuthStore = () => {


    const { status, user, errorMessage } = useSelector( (state: any) => state.auth );
    const dispatch = useDispatch();


    const startLogin = async( login: any ) => {
        dispatch( onChecking() );
        try {
            const { data } = await usuariosApi.post('/auth/login', login);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
            dispatch( onLogin( data.usuario ) );
        } catch (error: any) {
            dispatch( onLogout('') );
            Swal.fire('Error', error.response.data?.msg, 'error');
        }
    }



    
    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');

        if( !token ){ return dispatch( onLogout('') ) }

        try {
            const { data } = await usuariosApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString() );
            dispatch( onLogin( data.usuario ) );           
        } catch (error: any) {
            localStorage.clear();
            dispatch( onLogout('') );
            console.log(error.response.data?.msg);
            // Swal.fire('Error', error.response.data?.msg, 'error');
        }
    }



    
    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout('') );
    }




    return {
        // Propiedades
        status,
        user,
        errorMessage,

        // Metodos
        startLogin,
        checkAuthToken,
        startLogout,
    }


}