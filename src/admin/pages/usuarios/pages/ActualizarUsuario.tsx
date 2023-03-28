

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Grid,  MenuItem, TextField } from '@mui/material';
import { AdminLayout } from '../../../layouts';

import { useUsuarioStore } from '../../../../hooks';
import Swal from 'sweetalert2';



const initialState = {
    nombre: "",
    rol: "",
    direccion: "",
    ciudad: "",
    movil: "",
};



export const ActualizarUsuario = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { activeUsuario, setActiveUsuario, startSavingUsuario } = useUsuarioStore();


    const [formUser, setFormUser] = useState(initialState);
    const  { nombre, rol, direccion, ciudad, movil } = formUser;

    const handleInputChange = ({ target }: any) => {
        setFormUser({
            ...formUser,
            [target.name]: target.value
        });
    }



    useEffect(() => {
        if( id ){
            setActiveUsuario( id )
        }
    }, [ id ] );


    useEffect(() => {
        if( activeUsuario ){
            setFormUser( activeUsuario );
        }
    }, [ activeUsuario ] );
    

    
    const handleUpdateUser = async(e: any) => {
        e.preventDefault();

        if([nombre, rol, direccion, ciudad, movil].includes('') ){
            return Swal.fire('Error', 'Formulario Incompleto', 'error');
        }
        const resp = await Swal.fire({
            title: '¿Acualizar Usuario?',
            text: `Esta Seguro De Actualizar a: ${ nombre }`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, Actualizar' 
        }).then( ( result ) => {
            if(result.value){
                return startSavingUsuario( formUser );
            }
        });

        if( resp ){
            navigate('/admin/list-user');
        }
    }




    return (

        <AdminLayout title={'Actualizar Usuario'} url={'/admin/list-user'} >

            <form onSubmit={ handleUpdateUser } >
                <Grid container spacing={ 2 }>

                    <Grid item xs={12} sm={6} md={4} >
                        <TextField 
                            label='Nombre Completo'
                            type='text'
                            placeholder='Nombre Completo'
                            fullWidth
                            name='nombre'
                            value={ nombre }
                            onChange={ handleInputChange }
                        />
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={4} >
                        <TextField required
                            label='Correo'
                            type='email'
                            placeholder='Correo'
                            fullWidth
                            name='correo'
                            value={ correo }
                            onChange={ handleInputChange }
                        />
                    </Grid> */}

                    <Grid item xs={12} sm={6} md={4}  >
                        <TextField required
                            select
                            label="Seleccione Rol"
                            fullWidth
                            name='rol'
                            value={ rol }
                            onChange={ handleInputChange }
                        >
                            <MenuItem value=''>
                                Seleccione Rol
                            </MenuItem>
                            <MenuItem value='SUPER_ROLE'>
                                SUPER_ROLE
                            </MenuItem>
                            <MenuItem value='ADMIN_ROLE'>
                                ADMIN_ROLE
                            </MenuItem>
                            <MenuItem value='CLIENTE'>
                                CLIENTE
                            </MenuItem>
                        </TextField>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={4}  >
                        <TextField required
                            label='Direccion'
                            type='text'
                            placeholder='Direccion'
                            fullWidth
                            name='direccion'
                            value={ direccion }
                            onChange={ handleInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={4}  >
                        <TextField required
                            label='Ciudad'
                            type='text'
                            placeholder='Ciudad'
                            fullWidth
                            name='ciudad'
                            value={ ciudad }
                            onChange={ handleInputChange }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 6 } md={4} >
                        <TextField required
                            label='Telefono'
                            type='number'
                            placeholder='Telefono'
                            fullWidth
                            name='movil'
                            value={ movil }
                            onChange={ handleInputChange }
                        />
                    </Grid>
                    
                </Grid>

                <Grid container 
                    sx={{ my:4, direccion:'column', justifyContent:'center'  }} 
                >
                    <Grid item xs={ 12 } sm={ 8 } md={5} >
                        <Button variant='contained' fullWidth type='submit'>
                            Actualizar Usuario
                        </Button>
                    </Grid>
                </Grid>

            </form>
            
        </AdminLayout>


    )


}
