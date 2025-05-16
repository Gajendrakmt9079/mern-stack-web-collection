import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstanceAdmin from '../backendApis/axiosInstanceAdmin';
function Sidebar() {

  const navigate = useNavigate()
  const handlelogout = async () => {
    try {
      // window.confirm("are you sure to logout!");
      await axiosInstanceAdmin.post('/logout', {}, {
        withCredentials: true
      });


    } catch (error) {
      alert("Unable to logout");

    }
  };


  return (


    <aside className="w-64 bg-sidebar fixed h-full">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/clients" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Clients</span>
        </NavLink>
        <NavLink to="/add-client" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Add Client</span>
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Reports</span>
        </NavLink>
        {/* <NavLink to="/settings" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Settings</span>
        </NavLink> */}
        <NavLink to="/messages" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <span>Messages</span>
        </NavLink>
        <button onClick={handlelogout} className="sidebar-link w-full text-left">
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar