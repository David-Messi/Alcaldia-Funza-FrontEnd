

import { Box, Toolbar } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import { NavBarScreen, SideBarScreen } from "../components";
import { SubirDocumento, ListadoUsuarios, ListadoUsuariosInactivos } from "../pages/usuarios/pages";





export const AdminRoutes = () => {


    return (

        <>
            <NavBarScreen />


            <SideBarScreen />


            <Toolbar />

            <Box component='main' sx={{ flexGrow: 1, p:8 }} >

                <Routes>


                    {/* Rutas de Usuario */}
                    <Route path="list-user" element={ <ListadoUsuarios /> } /> 
                    <Route path="inactivos" element={ <ListadoUsuariosInactivos /> } /> 
                    <Route path="subirdoc" element={ <SubirDocumento /> } />

                    <Route path="/*" element={ <Navigate to="/admin/list-user" /> } />

                </Routes>


            </Box>

        </>


    )


    
}
