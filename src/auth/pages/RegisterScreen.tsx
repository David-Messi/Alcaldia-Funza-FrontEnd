

import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

import Swal from "sweetalert2";




const iniCliente = {
    nombre: "ironman2",
    email: "11223@gmail.com",
    password: "12345",
    confirmarPassword: "12345",
    distribuidor: "621ccf6e46b1b24654c1e163",
  }




export const RegisterScreen = () => {


    const navigate = useNavigate();


    const [ formCliente, setFormCliente ] = useState( iniCliente );
    const { nombre, email, password, confirmarPassword } = formCliente;

    const handleInputChange = ({ target }: any) => {
        setFormCliente({
          ...formCliente,
          [target.name]: target.value
        });
    }



    const handleCrearCliente = async(e: any) => {
        e.preventDefault();
        if( password !== confirmarPassword ) {
          return Swal.fire('Error', 'Las Contraseñas deben de ser Iguales', 'error');
        } 
        if( password.length <= 4 ) {
          return Swal.fire('Error', 'El Password Debe de tener mas de 5 Caracteres', 'error');
        }
        // dispatch( clienteRegisterNew({ nombre, cedula, password, distribuidor }) );
        navigate(`/`);
    }



  return (

    <AuthLayout title='Registro de Usuario'>
            <form onSubmit={ handleCrearCliente } >
                <Grid container >

                    <Grid item xs={ 12 } mt={ 2 }>
                        <TextField
                            label='Nombre Completo'
                            type='text'
                            placeholder='Nombre Completo'
                            name="nombre" value={ nombre }
                            onChange={ handleInputChange }
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } mt={ 2 }>
                        <TextField
                            label='Correo Electronico'
                            type='email'
                            placeholder='Correo Electronico'
                            name="email" value={ email }
                            onChange={ handleInputChange }
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 }  mt={ 2 }>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            name="password" value={ password }
                            onChange={ handleInputChange }
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 }  mt={ 2 }>
                        <TextField
                            label='Confirmar Contraseña'
                            type='password'
                            placeholder='Confirmar Contraseña'
                            name="confirmarPassword" value={ confirmarPassword }
                            onChange={ handleInputChange }
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb:2, mt:2 }} >
                        <Grid item xs={ 12 } >
                            <Button variant='contained' fullWidth >
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    
                    <Grid container direction='row' justifyContent='end' >
                        <Typography sx={{ mr:1 }}>¿Ya tienes Cuenta? </Typography>
                        <Link component={ RouterLink } to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

  )



}
