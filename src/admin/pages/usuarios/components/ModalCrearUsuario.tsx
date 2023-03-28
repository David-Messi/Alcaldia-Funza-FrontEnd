
import { useState, useEffect } from 'react';

import { Button, Grid, MenuItem, TextField, Typography, Box, Backdrop, Modal } from '@mui/material';
import { useModalUserStore, useUsuarioStore } from '../../../../hooks';

import Swal from 'sweetalert2';




const initialState = {
    nombre: "",
    cedula: "",
    correo: "",
    rol: "",
    direccion: "",
    ciudad: "",
    movil: "",
};



export const ModalCrearUsuario = () => {
    
    
    const { modalUsuario, closeModalUser } = useModalUserStore();
    const { startSavingUsuario, activeUsuario, desactivarUsuarioActive } = useUsuarioStore();



    
    const [formUser, setFormUser] = useState(initialState);
    const  { nombre, cedula, correo, rol, direccion, ciudad, movil } = formUser;

    const handleInputChange = ({ target }: any) => {
        setFormUser({
            ...formUser,
            [target.name]: target.value
        });
    }


    useEffect(() => {
        if(activeUsuario){
            setFormUser({
                ...activeUsuario,
                nombre: activeUsuario.nombre || '',
                cedula: activeUsuario.cedula || '',
                correo: activeUsuario.correo || '',
                rol: activeUsuario.rol || '',
                direccion: activeUsuario.direccion || '',
                ciudad: activeUsuario.ciudad || '',
                movil: activeUsuario.movil || '',
            });
        }else {
            setFormUser( initialState );
        }
    }, [activeUsuario])
    

    const cerrarModal = () => {
        desactivarUsuarioActive();
        closeModalUser();
    }



    const handleCrearUsuario = async(e: any) => {
        e.preventDefault();
        if([nombre, correo, rol, movil].includes('') ){
            return Swal.fire('Error', 'Formulario Incompleto', 'error');
        }
        closeModalUser();
        if(await startSavingUsuario( formUser )){
            setFormUser(initialState);
        }
    }


    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={ modalUsuario }
            onClose={ cerrarModal }
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Box className='modal-style2'>

                <Typography align='center' variant='h1' mb={2}>
                    {(!activeUsuario) ? 'Crear Usuario' : 'Actualizar Usuario'}
                </Typography>

                <form  onSubmit={ handleCrearUsuario } >

                    <Grid container spacing={ 2 }>
                    {/* sm={6} md={4} */}
                        <Grid item xs={12}>
                            <TextField required
                                label='Nombre Completo'
                                type='text'
                                placeholder='Nombre Completo'
                                fullWidth
                                name='nombre'
                                value={ nombre }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 12 }>
                            <TextField 
                                label='Cedula'
                                type='text'
                                placeholder='Cedula'
                                fullWidth
                                name='cedula'
                                value={ cedula }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField required
                                label='Correo'
                                type='email'
                                placeholder='Correo'
                                fullWidth
                                name='correo'
                                value={ correo }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={6} >
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
                                {/* <MenuItem value='SUPER_ROLE'>
                                    SUPER_ROLE
                                </MenuItem> */}
                                <MenuItem value='ADMIN_ROLE'>
                                    ADMIN_ROLE
                                </MenuItem>
                                <MenuItem value='USER_ROLE'>
                                    USER_ROLE
                                </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={ 6 }>
                            <TextField 
                                label='Direccion'
                                type='text'
                                placeholder='Direccion'
                                fullWidth
                                name='direccion'
                                value={ direccion }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 6 }>
                            <TextField 
                                label='Ciudad'
                                type='text'
                                placeholder='Ciudad'
                                fullWidth
                                name='ciudad'
                                value={ ciudad }
                                onChange={ handleInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 6 } >
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
                    sx={{ my:3, direccion:'column', justifyContent:'center'  }} 
                    >
                        <Grid item xs={ 12 }>
                            <Button variant='contained' fullWidth type='submit'>
                                { (!activeUsuario) ? 'Crear Usuario' : 'Actualizar Usuario' }
                            </Button>
                        </Grid>
                    </Grid>


                </form>
            </Box>
        </Modal>

    );



}