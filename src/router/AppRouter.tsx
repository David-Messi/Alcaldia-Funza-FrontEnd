

import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { PublicRoute, PrivateRoute } from './';

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks";
import { CargandoScreen } from '../components';





export const AppRouter = () => {


    const { status, checkAuthToken } = useAuthStore();


    useEffect(() => {
        checkAuthToken();
    }, [])



    if( status === 'checking' ){
        return(
            <CargandoScreen />
        )
    } 




    return (


        <Routes>

            <Route element={<PublicRoute />} >
                <Route path="/auth/*" element={ <AuthRoutes /> } />
            </Route>
            

            <Route element={<PrivateRoute />} >
                <Route path="/admin/*" element={ <AdminRoutes /> } /> 
            </Route>


            {/* <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="/admin/*" element={ <AdminRoutes /> } /> */}


            {/* <Route path="/*" element={ <Navigate to="/auth/login" /> } /> */}

        </Routes>


    
    )



}
