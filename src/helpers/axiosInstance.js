import axios from 'axios';


// Set main axios instance to replicate it all subsequent requests
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token');
    return config;
}, (error) => {
    return Promise.reject(error);
});

/* 
Intercepts all requests to check if access token is still valid. If not, send refresh token to
/token/refresh endpoint to create a new access token; the old refresh token is replaced by the 
new refresh token in the database. In case the refresh token is not valid as well, log out user.  
*/
axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;


        // Prevent infinite loops
        if (error.response.status === 403 && originalRequest.url === error.config.baseURL + 'token/refresh') {
            window.location.href = '/login';
            return Promise.reject(error);
        }

        if (error.response.status === 401 || error.response.status === 404) {
            localStorage.removeItem('token');
            window.location.href = '/error';
            return Promise.reject(error);
        }

        if (error.response.status === 403) {
            try {
                const res = await axios({
                    method: 'post',
                    url: 'http://localhost:8000/token/refresh',
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    },
                    timeout: 5000,
                    withCredentials: true,
                    data: { userId: localStorage.getItem('userId') }
                });
                localStorage.setItem('token', res.data.accessToken);
                axiosInstance.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
                originalRequest.headers['Authorization'] = "Bearer " + localStorage.getItem('token');
                return axiosInstance(originalRequest);
            } catch (err) {
                localStorage.removeItem('userId');
                return window.location.href = '/login';
            }
        }
        // specific error handling done elsewhere
        return Promise.reject(error);

    }

);


export default axiosInstance;