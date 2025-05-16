import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/users', // Change this to match your Express server URL
  headers: {
    'Content-Type': 'application/json',
  },
});



export default axiosInstance;
