
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Link, Toolbar, Typography, Badge } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
// import { useNotificacionStore, useUIStore } from "../../hooks";

import MailIcon from '@mui/icons-material/Mail';
import { useUIStore } from "../../hooks";



// const empresa = require.context('../../assets/empresa', true);



export const NavBarScreen = () => {


    const navigate = useNavigate();
    const { openSidebar } = useUIStore();
    // const { notificaciones, startLoadingNotificacion } = useNotificacionStore();
  

    // useEffect(() => {
    //   startLoadingNotificacion();
    // }, [] );



    const verNotificaciones = () => {
        navigate(`/admin/notificaciones`);
    }


    return (

        <AppBar>
          <Toolbar>

          
            <IconButton sx={{ color: '#fff', mr:2 }} onClick={ openSidebar } >
              <MenuIcon />
            </IconButton>

            <Link >
              <Typography variant="h2" sx={{ color: '#fff' }}>Admin</Typography>
            </Link>

            <Box flex={ 1 } />

            {/* <Badge badgeContent={ notificaciones.length } color="secondary" onClick={ verNotificaciones } >
              <MailIcon color="action" />
            </Badge> */}

          </Toolbar>
        </AppBar>
        

    )


}
