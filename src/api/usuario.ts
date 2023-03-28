

import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';




const { VITE_API_URL } = getEnvVariables();




const usuariosApi = axios.create({
    baseURL: VITE_API_URL
});


// Configurar Interceptores
usuariosApi.interceptors.request.use( (config: any) => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})





export default usuariosApi;


