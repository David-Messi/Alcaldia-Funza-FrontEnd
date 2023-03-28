
import { useState, useEffect } from 'react';

import { Grid, TextField } from '@mui/material';
import { useUsuarioStore } from '../../../../hooks';






export const BuscarUsuarios = () => {



    const { startLoadingUsuarios, startSearchUser } = useUsuarioStore();


    const [valor, setValor] = useState('');



    useEffect(() => {
        if( valor.trim().length > 0 ){
            startSearchUser(valor);
        }else {
            startLoadingUsuarios();
        }
    }, [valor])



    return (

        <Grid item xs={ 12 }  sx={{ my: 4 }} >
            <TextField  
                autoComplete="off"
                label="Buscar Usuario..." 
                variant="filled" 
                fullWidth
                name="valor"
                value={ valor }
                onChange={ (e) => setValor(e.target.value) }
            />

        </Grid>



    )



}
