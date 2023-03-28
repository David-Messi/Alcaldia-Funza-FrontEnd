
import { useEffect } from 'react';

import { useUsuarioStore } from '../../../../hooks';
import { LayoutAdd } from '../../../layouts/LayoutAdd';
import { ModalCrearUsuario, TablaListadoUsuarios } from '../components';




export const ListadoUsuariosInactivos = () => {

    const { usuarios, startLoadingUsuariosDesactivos, isLoadingUsuario } = useUsuarioStore();


    useEffect(() => {
        startLoadingUsuariosDesactivos();
    }, [])


    return (


        <LayoutAdd title={'Usuarios Inactivos'} url={'/admin/crear-user'} url2={''}>

            {/* <BuscarUsuarios /> */}

            <TablaListadoUsuarios />

            {/* <FloatingActionButtom /> */}

            <ModalCrearUsuario />

        </LayoutAdd>


    )


    
}
