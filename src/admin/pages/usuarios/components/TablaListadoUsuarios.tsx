
import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem, ListItemText, Typography, ListItemAvatar, Avatar, ListItemButton, IconButton, Paper, TableContainer, Table, TableCell, TableRow, TableBody, TablePagination } from '@mui/material';

import { useModalUserStore, useUsuarioStore } from "../../../../hooks";
import { MensajeAlertaDanger } from "../../../../components";

import Swal from 'sweetalert2';





export const TablaListadoUsuarios = () => {


    const { usuarios, deleteUsuario, setActiveUsuario } = useUsuarioStore();
    const { openModalUser } = useModalUserStore();
    


    const handleUser = (user: any) => {
        setActiveUsuario(user);
        openModalUser();
    }

    


    const handleDelete = ( user: any ) => {
        Swal.fire({
            title: 'Eliminar Usuario',
            text: `¿Esta Seguro De Eliminar a: ${ user.nombre }?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminar' 
        }).then( ( result ) => {
            if(result.value){
                deleteUsuario( user );
            }
        });
    }


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };



    return (


        <>

            { ( usuarios.length > 0 ) 
            // ? <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            //     { usuarios.map( (user: any) => (
            //     <div key={user.uid} >
            //     <ListItem sx={{ alignItems:"flex-start", pt:2, px:0, pb:0}}
            //         secondaryAction={
            //         <IconButton edge="end" sx={{ color:'red', zIndex:500 }} onClick={ () => handleDelete(user) }>
            //             <DeleteIcon />
            //         </IconButton>
            //         }
            //     >
            //         <ListItemButton onClick={ () => handleUser(user) }>
            //             <ListItemAvatar>
            //                 <Avatar alt={ user.nombre } src="/static/images/avatar/1.jpg" />
            //             </ListItemAvatar>
            //             <ListItemText
            //             primary={ user.nombre }
            //             secondary={
            //                 <>
            //                 <Typography
            //                     // sx={{ display: 'inline' }}
            //                     component="span" 
            //                     variant="body2"
            //                     color="text.primary"
            //                 >
            //                     { user.correo } 
            //                 </Typography>
            //                     {' -'} { user.movil }
            //                 </>
            //             }
            //             />

            //         </ListItemButton>
            //     </ListItem>
            //     <Divider component="li" />
            //     </div>
            //     ))
            //     }
            // </List>

            // :  <MensajeAlertaDanger titulo="No Existen Usuario Disponibles" />


            ?<Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ border:"none" }}>
                    <Table sx={{ border:"none" }}>
                    
                    <TableBody>
                        {usuarios
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map( (user: any) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={user.uid}>
                                <TableCell>
                                    <ListItem sx={{ alignItems:"flex-start", pt:0, px:0, pb:0}}
                                        secondaryAction={
                                        <IconButton edge="end" sx={{ color:'red', zIndex:500 }} onClick={ () => handleDelete(user) }>
                                            <DeleteIcon />
                                        </IconButton>
                                        }
                                    >
                                        <ListItemButton onClick={ () => handleUser(user) }>
                                            <ListItemAvatar>
                                                <Avatar alt={ user.nombre } src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary={ user.nombre }
                                            secondary={
                                                <>
                                                <Typography
                                                    component="span" 
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    { user.correo } 
                                                </Typography>
                                                    {' -'} { user.movil }
                                                </>
                                            }
                                            />

                                        </ListItemButton>
                                    </ListItem>
                                </TableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>


                <TablePagination
                    rowsPerPageOptions={[25]}
                    component="div"
                    count={usuarios.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            : <MensajeAlertaDanger titulo="No Existen Usuario Disponibles" />

            }

        </>




    )


    
}
