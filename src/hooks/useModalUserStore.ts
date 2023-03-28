



import { useDispatch, useSelector } from 'react-redux';
import { closeModalUsuario, openModalUsuario } from '../store';



export const useModalUserStore = () => {



    const dispatch = useDispatch();
    const { modalUsuario } = useSelector( (state: any) => state.modal );


    const openModalUser = () => {
        dispatch( openModalUsuario() );
    }

    const closeModalUser = () => {
        dispatch( closeModalUsuario() );
    }


    return {
        //Propiedades
        modalUsuario,

        // Metodos
        openModalUser,
        closeModalUser,
    }

}