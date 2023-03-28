
import { useDispatch, useSelector } from "react-redux";

import { usuariosApi } from "../api";
import { onAddNewUsuario, onDeleteUsuario, onLoanding, onLoandingUsuario, onSetActiveUsuario, onSetDesactiveUsuario, onUpdateUsuario } from "../store";
import Swal from "sweetalert2";



export const useUsuarioStore = () => {

    const { isLoadingUsuario, usuarios, clientes, activeUsuario } = useSelector( (state: any) => state.usuario );
    const dispatch = useDispatch();




    // Crear o Actualizar Usuario
    const startSavingUsuario = async( user: any ) => {
        try {
            if( user.uid ){
                const { data } = await usuariosApi.put(`/usuarios/${ user.uid }`, user );
                if( data.ok ){
                    dispatch( onUpdateUsuario( data.usuario ) );
                    Swal.fire('Exitoso', 'Usuario Actualizado', 'success');
                    return true;
                }
            }else {
                const { data } = await usuariosApi.post('/usuarios', user );
                if( data.ok ){
                    dispatch( onAddNewUsuario( data.usuario ) );
                    Swal.fire('Exitoso', 'Usuario Creado', 'success');
                    return true;
                }
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }




    const startCrearUsuarioExel = async( file: any ) => {
        try {

            const formData = new FormData();
            formData.append("exel", file);

            Swal.fire({
                title: 'Cargando....',
                text: 'Espere Por Favor',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            Swal.close();

            const { data } = await usuariosApi.post('/usuarios/exel/archivo', formData);
            if( data.ok ){
                Swal.fire('Exitoso', data.msg, 'success');
                return true;
                
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }



    // Listar todos los usuarios Activos
    const startLoadingUsuarios = async() => {
        try {
            dispatch(onLoanding() );
            const { data } = await usuariosApi.get('/usuarios');
            if( data.ok ){
                dispatch( onLoandingUsuario( data.usuarios ) );
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }



    // Listar todos los usuarios Desactivados
    const startLoadingUsuariosDesactivos = async() => {
        try {
            dispatch(onLoanding() );
            const { data } = await usuariosApi.get('/usuarios/inactivos');
            if( data.ok ){
                dispatch( onLoandingUsuario( data.usuarios ) );
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }



     //Buscar Usuarios
    const startSearchUser = async( texto: string ) => {
        try {
            dispatch(onLoanding() );
            const { data } = await usuariosApi.get(`/buscar/user/${texto}`);
            if( data.ok ){
                dispatch( onLoandingUsuario( data.user ) );
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }

    

    // Activar Usuario
    const setActiveUsuario = async( user: any ) => {
        try {
            dispatch( onSetActiveUsuario( user ) );
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }


      // Eliminar Usuario Activo
    const desactivarUsuarioActive = async() => {
        try {
            dispatch( onSetDesactiveUsuario() );
        } catch (error: any) {
            console.log(error);
        }
    }



    // Eliminar un usuario
    const deleteUsuario = async( user: any ) => {
        try {
            const { data } = await usuariosApi.delete(`/usuarios/${ user.uid }`);
            if( data.ok ){
                dispatch( onDeleteUsuario( user ) );
                Swal.fire('Exitoso', 'Usuario Eliminado', 'success');
                return true;
            }
        } catch (error: any) {
            console.log(error);
            Swal.fire('Error', error.response.data.errors[0].msg, 'error');
        }
    }












    return {
        // Propiedades
        isLoadingUsuario, 
        usuarios, 
        clientes, 
        activeUsuario,

        // Metodos
        startSavingUsuario,
        startLoadingUsuariosDesactivos,
        startLoadingUsuarios,
        setActiveUsuario,
        deleteUsuario,
        startSearchUser,
        startCrearUsuarioExel,
        desactivarUsuarioActive
    }



    
}
