import axios from 'axios';
//import { useContext } from 'react';


const userId = '604db8f25c8a8370402479fb'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    withCredentials: true
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === error.config.baseURL + 'token/refresh') {
            window.location.href = '/login';
            return Promise.reject(error);
        }

        if (error.response.status !== 401 && originalRequest.url === error.config.baseURL + 'token/refresh' && error.response.status !== 403) {
            window.location.href = '/error';
            return Promise.reject(error);
        }

        if (error.response.status === 403) {
            return axiosInstance
                .post('/token/refresh/', { userId: userId })
                .then((response) => {

                    localStorage.setItem('access_token', response.data.accessToken);
                    //localStorage.setItem('refresh_token', response.data.refresh);

                    axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.accessToken;
                    originalRequest.headers['Authorization'] = "Bearer " + response.data.accessToken;

                    return axiosInstance(originalRequest);
                })
                .catch(err => {
                    window.location.href = '/login';
                });
        }


        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);


export default axiosInstance;