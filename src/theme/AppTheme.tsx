import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { themeOriginal } from "./"



export const AppTheme = ({ children }: any) => {


    return (

        <ThemeProvider theme={ themeOriginal } >

            <CssBaseline />

            { children }

        </ThemeProvider>



    )



}
