

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';

import EditIcon from '@mui/icons-material/Edit';
import { AddOutlined  } from "@mui/icons-material";
import { useModalUserStore, useUsuarioStore } from '../../../../hooks';







export const FloatingActionButtom = () => {


    const navigate = useNavigate();
    const { openModalUser } = useModalUserStore();
    const { desactivarUsuarioActive } = useUsuarioStore();




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const crearUsuario = () => {
        openModalUser();
        desactivarUsuarioActive();
    }

    const handleArchivados = () => {
        navigate('/admin/inactivos');
    }


    const actions = [
        { icon: <AddOutlined />, name: 'Crear Nuevo', accion: crearUsuario },
        { icon: <SaveIcon />, name: 'Archivados', accion: handleArchivados },
    ];




    return (
        
        // <Box sx={{ height:300, transform:'translateZ(0px)', flexGrow: 1, my:4 }}>
        // <Backdrop open={open} />
        //     <SpeedDial
        //         ariaLabel="SpeedDial tooltip example"
        //         sx={{ position: 'absolute', bottom: 20, right: 10 }}
        //         icon={<SpeedDialIcon />}
        //         onClose={ handleClose }
        //         onOpen={ handleOpen }
        //         open={open}
        //     >
        //         {actions.map((action) => (
        //         <SpeedDialAction
        //             key={action.name}
        //             icon={action.icon}
        //             tooltipTitle={action.name}
        //             tooltipOpen
        //             onClick={handleClose}
        //         />
        //         ))}
        //     </SpeedDial>
        // </Box>


        // <Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow:1, my:3 }}>
        //     <SpeedDial
        //         ariaLabel="SpeedDial openIcon example"
        //         sx={{ position:'absolute', bottom:20, right: 10 }}
        //         icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        //     >
        //         {actions.map((action) => (
        //         <SpeedDialAction
        //             key={action.name}
        //             icon={action.icon}
        //             tooltipTitle={action.name}
        //             onClick={ action.accion }
        //         />
        //         ))}
        //     </SpeedDial>
        // </Box>


        <Box sx={{ transform: 'translateZ(0px)' }}>
            <SpeedDial
                sx={{ position: 'absolute', top:-30, right: 16, }}
                ariaLabel="SpeedDial openIcon example"
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                direction='left'
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={ action.accion }
                />
                ))}
            </SpeedDial>
        </Box>
    );





}