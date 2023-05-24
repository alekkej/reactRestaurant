import axios from 'axios';


const axiosConfig = axios.create({
   baseURL: 'http://localhost:3001/',
   responseType: 'json',
   withCredentials: true,
});

export default axiosConfig;