import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstanceAdmin from '../backendApis/axiosInstanceAdmin';
// Your axios withCredentials instance

 const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axiosInstanceAdmin.get('/me', { withCredentials: true })
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};



export default ProtectedRoute;