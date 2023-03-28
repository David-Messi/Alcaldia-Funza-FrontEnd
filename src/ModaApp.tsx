import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme";
import { store } from './store';




export const ModaApp = () => {


    return (

        <>
            <Provider store={ store } >
                <BrowserRouter>
                    <AppTheme>
                        <AppRouter />
                    </AppTheme>
                </BrowserRouter>
            </Provider>

        </>
    
    
    )


    
}
