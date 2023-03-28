

import { Grid, Typography } from "@mui/material"




export const AuthLayout = ({ children, title }: any) => {



    return (

        <Grid
            container
            spacing={ 0 }
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            sx={{ minHeight:'100vh', padding:4 }}  
            //backgroundColor:'primary.main'
        >

            <Grid item
                sx={{ padding:3, borderRadius:2, border:'3px solid', borderColor:'secondary', width:'550px' }}
                className="fondo-login"
            >

                <Typography variant='h2' sx={{ mb:2, textAlign:'center' }} >{ title }</Typography>


                { children }


            </Grid>

        </Grid>



    )



}



