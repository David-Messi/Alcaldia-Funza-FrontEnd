
import { Navigate, Routes, Route } from "react-router-dom";

import { LoginScreen, RegisterScreen } from '../pages'



export const AuthRoutes = () => {


    return (


        <Routes>

            <Route path="login" element={ <LoginScreen /> } />
            <Route path="register" element={ <RegisterScreen /> } />


            <Route path="/*" element={ <Navigate to="/auth/login" /> } />

        </Routes>



    )




}
