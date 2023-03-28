
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar } from "@mui/material"
import { LoginOutlined } from "@mui/icons-material";
import { useAuthStore, useUIStore } from "../../hooks";

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ThreePIcon from '@mui/icons-material/ThreeP';





export const SideBarScreen = () => {


    const navigate = useNavigate();
    const { startLogout, user } = useAuthStore();
    const { isSidebarOpen, closeSidebar } = useUIStore();

    // const [menu, setMenu] = useState([]);


    // useEffect(() => {
    //     if( user ){
    //         const items = retornarMenu(user.role);
    //         setMenu( items );
    //         // console.log(items);
    //     }
    // }, [user]);
    

    
    const navegacionRutas = ( url: string ) => {
        if( !url ){
            return;
        }
        closeSidebar();
        navigate(url);
    }



    const handleLogout = () => {
        startLogout();
        closeSidebar();
        navigate('/auth/login');
    }



  return (

    <Drawer
        open={ isSidebarOpen }
        onClose={ closeSidebar }
        anchor='left'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.3s ease-out' }}
    >

        <Box sx={{ width: 250, paddingTop: 2, }}>
            
            <List >

                {/* { user && */}
                <Box display='flex' justifyContent='center'
                    alignItems='center' flexDirection='column'
                    sx={{ minHeight:'200px' }} 
                >
                    <Avatar
                        alt="Avatar Administrador"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 110, height: 110, my:2 }}
                    />

                    {/* <div className="img-logo">  
                        <img src={ empresa(`./pccpollo.png`) } alt='LogoEmpresa' />
                    </div> */}

                    <Typography variant='h6' align='center' component='div' sx={{ fontWeight:'bold' }} >
                        { user?.nombre }
                    </Typography>
                    <Typography  align='center' component='div' sx={{ mb:3, fontWeight:'light' }} >
                        { user?.rol }
                    </Typography>
                </Box>

                <Divider sx={{ color:'#fff' }} />

                <ListItem button 
                    onClick={ () => navegacionRutas('/admin/dashboard') }
                >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={ 'Dashboard' } />
                </ListItem>

                <ListItem button 
                    onClick={ () => navegacionRutas('/admin/list-user') }
                >
                    <ListItemIcon>
                        <SupervisedUserCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={ 'Usuarios' } />
                </ListItem>

                <Divider />


                <ListItem button 
                    onClick={ () => navegacionRutas('/admin/subirdoc') }
                >
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={ 'Acciones' } />
                </ListItem>



                <Divider />

                <ListItem button onClick={ handleLogout } sx={{ mb:2 }}>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>

            </List>
        </Box>
    </Drawer>

 )
}

