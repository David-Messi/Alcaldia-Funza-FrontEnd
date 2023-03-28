

import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks";





export const PublicRoute = ({ children }: any) => {


    const { status } = useAuthStore();


    if( status === 'authenticated' ) {
        return <Navigate to="/admin" />
    }
    
    return <Outlet /> 

}
