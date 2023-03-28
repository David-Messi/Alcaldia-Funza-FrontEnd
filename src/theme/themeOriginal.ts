

import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const themeOriginal = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#1de9b6'
        },
        secondary: {
            main: '#212121'
        },
        error: {
            main: red.A400
        }
    },


    components: {
    
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 40,
                    fontWeight: "bold",                  
                },
                h2: {
                    fontSize: 35,
                    fontWeight: 'bold',
                },
                
            }
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#212121',
                    underline: 'none',
                    "&:hover": {
                        underline: 'none',
                    }
                }
            }
        },


        MuiTabs: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: '#000000',
                },
            }
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontSize: 15,
                    padding: 20,
                },
            }
        },

        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            }
        },

        MuiTableContainer:{
            styleOverrides: {
                root: {
                    border: '1px solid black'
                }
            }
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    padding: '6px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    // backgroundColor: 'primary',
                }
            }
        },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&:nth-of-type(odd)":{
                        backgroundColor: '#f5f5f5',
                    },
                    '&:last-child th': {
                        backgroundColor: '#212121',
                        fontSize: '17px',
                        fontWeight: 'bold',
                        color: '#fff',
                        padding: '13px',
                        textAlign: 'center',
                        borderBottom: '1px solid white'
                    }
                }
            }
        },


    }


})