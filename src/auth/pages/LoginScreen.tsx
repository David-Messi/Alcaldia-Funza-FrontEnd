

import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks';
// import Swal from 'sweetalert2';





export const LoginScreen = () => {


    const { startLogin } = useAuthStore();




    const [formLogin, setFormLogin] = useState({
        correo: '',
        password: ''
    });
    const { correo, password } = formLogin;

    const handleInputChange = ({ target }: any) => {
        setFormLogin({
            ...formLogin,
            [target.name]: target.value
        });
    }



    const handleSubmit = async(e: any) => {
        e.preventDefault();
        await startLogin( formLogin );
    }


    return (

        <AuthLayout title='Login' >

            <form onSubmit={ handleSubmit } >
                <Grid container >

                    <Grid item xs={ 12 } mt={ 2 }>
                        <TextField
                            label='Correo Electronico'
                            type='email'
                            placeholder='Correo Electronico'
                            fullWidth
                            name='correo'
                            value={ correo }
                            onChange={ handleInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 }  mt={ 2 }>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ handleInputChange }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb:2, mt:2 }} display={'flex'} justifyContent={'center'}>

                        <Grid item xs={ 12 } sm={ 8 } >
                            <Button variant='contained' fullWidth type="submit" >
                                Login
                            </Button>
                        </Grid>

                        {/* <Grid item xs={ 12 } sm={ 8 } >
                            <Button variant='contained' fullWidth >
                                <Link component={ RouterLink } to="/">
                                    Volver Al Home
                                </Link>
                            </Button>
                        </Grid> */}
                    </Grid>
                    
            
                </Grid>
            </form>
        </AuthLayout>



    )




}
