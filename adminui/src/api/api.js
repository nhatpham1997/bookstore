import axios from 'axios';
import getToken from '../untils/getToken';
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URI
});


api.interceptors.request.use(
    config => {
        if (getToken())
            config.headers["Authorization"] = `Bearer ${getToken()}`;
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

export default api;
