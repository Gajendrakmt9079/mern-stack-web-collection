import axios from 'axios';


const axiosInstanceAdmin = axios.create({
    baseURL: 'http://localhost:8000/api/admin', // Change this to match your Express server URL
    headers: {
      'Content-Type': 'application/json',
    }
 
  });
  
  export default axiosInstanceAdmin;