import axios from "axios";

export const BASE_URL = 'https://fakestoreapi.com';

axios.interceptors.response.use(
    response => response,
    error => {
        if( error.response.status === 401)
        {
            console.error(`Redirected to login by 401!`);
            window.location.href  = '/not-authorized';
        }

        if( error.response.status === 500)
        {
            if( error.response.data ){
                const response = error.response.data;
                if(!response.success)
                    console.error(response.message);
            }
            else
            console.error("Api Error: 500");
        }

        return Promise.reject(error);
    }
);


export default axios;
