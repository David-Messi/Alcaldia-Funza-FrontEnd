

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { useUsuarioStore } from "../../../../hooks";
import { BuscarUsuarios, FloatingActionButtom, ModalCrearUsuario, TablaListadoUsuarios } from "../components";
import { CargandoScreen } from "../../../../components";
import { LayoutAdd } from "../../../layouts";

import Swal from "sweetalert2";



export const ListadoUsuarios = () => {


    const { startLoadingUsuarios, isLoadingUsuario } = useUsuarioStore();


    useEffect(() => {
        startLoadingUsuarios();
    }, [])
    



    // if( isLoadingUsuario ){
    //     return (
    //         <CargandoScreen />
    //     )
    // }




    return (

        <LayoutAdd title={'Listado de Usuarios'} url={'/admin/crear-user'} url2={''}>

            <BuscarUsuarios />

            <TablaListadoUsuarios />

            {/* <FloatingActionButtom /> */}

            <ModalCrearUsuario />

        </LayoutAdd>

    )

}
