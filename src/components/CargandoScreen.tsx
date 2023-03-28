import { Box, CircularProgress, Typography } from "@mui/material"




export const CargandoScreen = () => {


    return (

        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'80vh' }}>
            <CircularProgress size="50px" />
            <Typography sx={{ fontSize:23, mt:2 }} >Cargando...</Typography>
        </Box>



    )



    
}
