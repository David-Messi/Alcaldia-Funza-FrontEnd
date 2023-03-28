
import { useNavigate } from 'react-router-dom';

import { Grid, IconButton, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackupIcon from '@mui/icons-material/Backup';






export const AdminLayout = ({ children, title, url }: any) => {


    const navigate = useNavigate();



    const regresar = () => {
        navigate(url);
    }





    return (



        <Grid container sx={{   direction:'column' }} >

            <Grid item xs={ 12 } sx={{ display:'flex', alignItems:'center', mb:5 }}>

                <IconButton
                    sx={{
                        color: '#fff',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.3 },
                    }}
                    onClick={ regresar }
                >
                    <ArrowBackIcon />
                </IconButton>

                <Box flex={ 1 } />

                <Typography variant='h2'>{ title }</Typography>

                <Box flex={ 1 } />

                <IconButton
                    sx={{
                        color: 'transparent',
                        backgroundColor: 'transparent',
                    }}
                >
                    <BackupIcon />
                </IconButton>

            </Grid>


            <Grid item xs={12}  sx={{ backgroundColor:'#fff' }} >


                { children }


            </Grid>

        </Grid>



    )





}
