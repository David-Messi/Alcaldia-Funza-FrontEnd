
import { useDispatch, useSelector } from 'react-redux';
import { onCloseSidebar, onOpenSidebar } from '../store';



export const useUIStore = () => {

    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector( (state: any) => state.ui );


    const openSidebar = () => {
        dispatch( onOpenSidebar() );
    }

    const closeSidebar = () => {
        dispatch( onCloseSidebar() );
    }


    return {
        //Propiedades
        isSidebarOpen,

        // Metodos
        openSidebar,
        closeSidebar,
    }

}