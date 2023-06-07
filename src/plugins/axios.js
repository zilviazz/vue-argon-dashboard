import axios from "axios";
import { getCookies, delCookies } from "./cookies";

//restfull API config
axios.defaults.headers['Content-Type'] = 'application/json'

//endpoint
const hostname = import.meta.env.VITE_BASE_API_URL;

//instance creation
const baseApi = axios.create({
    baseURL: hostname,
});

//request config
baseApi.interceptors.request.use(
    (config) => {
        const token = getCookies('CERT');
        if (token) config.headers['Authorization'] = `Bearer ${token}`;
        else {
            delCookies('CERT');
            delete config.headers['Authorization'];
        }

        return config;
    },
    (error) => {
        throw error;
    },
);

//response config
baseApi.interceptors.response.use(
    (response) => response.data,
    (error) => {
        switch (error.response.status) {
            case 401:
            delCookies('CERT')
            break;
            default:
                break;
        }
        throw error?.response?.error ?? error?.response?.message ?? error
    },
);

export { baseApi };