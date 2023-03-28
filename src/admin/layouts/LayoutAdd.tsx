
import { useNavigate } from "react-router-dom";

import { Grid, IconButton, Box, Typography } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import { AddOutlined } from "@mui/icons-material";
import { FloatingActionButtom } from "../pages/usuarios/components";




export const LayoutAdd = ({ children, title, url, url2 = '' }: any) => {



    const navigate = useNavigate();



    const crearUsuario = () => {
        navigate(url);
    }


    const verArchivados = () => {
        navigate(url2);
    }




    return (

        <Grid container sx={{   direction:'column' }} >

            <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'center', mb:5 }}>

                {/* <IconButton
                    sx={{
                        color: '#fff',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.3 },
                    }}
                    onClick={ crearUsuario }
                >
                    <AddOutlined />
                </IconButton> */}

                <Box flex={ 1 } />

                <Typography variant='h2'>{ title }</Typography>

                <Box flex={ 1 } />

                {/* <IconButton
                    sx={{
                        color: '#fff',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.3 },
                    }}
                    onClick={ verArchivados }
                >
                    <BackupIcon />
                </IconButton> */}
                <FloatingActionButtom />

            </Grid>


            <Grid item xs={12}  sx={{ backgroundColor:'#fff' }} >


                { children }


            </Grid>

        </Grid>

    )

    
}
