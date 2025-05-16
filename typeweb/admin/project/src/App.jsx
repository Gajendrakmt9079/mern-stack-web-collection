import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import AddClient from './pages/AddClient';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AdminProfile from './pages/Profile';
import Messageing from './pages/Messageing';
import NotificationsPage from './pages/NotificationsPage';
import Login from './pages/AdminLogin';
import axiosInstanceAdmin from './backendApis/axiosInstanceAdmin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // DO NOT try to read HttpOnly cookies (they won’t show up here).
    // Instead, assume cookies are set and try a backend call to check if authenticated.
    const checkAuth = async () => {
      try {
        const res = await axiosInstanceAdmin.get('/check-auth' , {withCredentials:true})
        
        const data = res.data.success;
       
         
        if (data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <div className="flex bg-gray-100">
                <Sidebar />
                <main className="ml-64 w-full">
                  <TopBar />
                  <div className="p-6">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/clients" element={<Clients />} />
                      <Route path="/add-client" element={<AddClient />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/notifications" element={<NotificationsPage />} />
                      <Route path="/profile" element={<AdminProfile />} />
                      <Route path="/messages" element={<Messageing />} />
                    </Routes>
                  </div>
                </main>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
