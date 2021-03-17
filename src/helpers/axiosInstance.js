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
    async error => {
        const originalRequest = error.config;
        console.log('error en axios ', error.response.status)

        // Prevent infinite loops
        if (error.response.status === 403 && originalRequest.url === error.config.baseURL + 'token/refresh') {
            window.location.href = '/login';
            return Promise.reject(error);
        }

        if (error.response.status === 401 || error.response.status === 404) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            window.location.href = '/error';
            return Promise.reject(error);
        }
        console.log('user id en interceptor ', localStorage.getItem('userId'))
        console.log('el token ', localStorage.getItem('token'))
        return;
        if (error.response.status === 403) {
            console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
            try {
                const res = await axios({
                    method: 'post',
                    url: 'http://localhost:8000/token/refresh',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    },
                    timeout: 5000,
                });
                console.log('res   ', res)
                //const res = await axiosInstance.post('/token/refresh', { userId: localStorage.getItem('userId') })
                localStorage.setItem('token', res.data.accessToken);
                axiosInstance.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
                originalRequest.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
                return axiosInstance(originalRequest);
            } catch (err) {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                window.location.href = '/login';
            }
        }
        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);


export default axiosInstance;