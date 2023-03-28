

import { useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { useUsuarioStore } from '../../../../hooks';



export const SubirDocumento = () => {


    const { startCrearUsuarioExel } = useUsuarioStore();

    const [archivo, setArchivo] = useState('');



    const handleFileChange = (event: any) => {
        // setArchivo(event.target.files[0]);
        const file = event.target.files[0];
        if( file ) {
            startCrearUsuarioExel(file);
        }
    }





    return (

        <Grid container spacing={3} justifyContent='center' >

            <Grid item xs={10} mb={4} >
                <Typography variant='h2' textAlign='center'>Acciones</Typography>
            </Grid>
        

            <Grid item xs={10}>
                <Button  variant="contained" component="label" fullWidth>
                    Subir Documento Exel
                    <input hidden  
                        multiple type="file" 
                        onChange={handleFileChange}
                    />
                </Button>
            </Grid>

            <Grid item xs={10}>
                <Button  variant="contained" component="label" fullWidth>
                    Enviar Mensaje
                    {/* <input hidden  
                        multiple type="file" 
                        onChange={handleFileChange}
                    /> */}
                </Button>
            </Grid>
        
        </Grid>


    )

    
}
