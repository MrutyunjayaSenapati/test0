import React from 'react';
import { FaTachometerAlt, FaTable, FaWpforms, FaUser, FaSignOutAlt, FaGithub, FaVuejs, FaExclamationCircle, FaChevronDown, FaPalette, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onSignout }) => (
  <aside className="sidebar">
    <div className="sidebar-logo">Zyon One</div>
    <nav className="sidebar-nav">
      <a href="#" className="active"><FaTachometerAlt /> Dashboard</a>
      <a href="#"><FaTable /> Tables</a>
      <a href="#"><FaWpforms /> Forms</a>
      <a href="#"><FaPalette /> UI</a>
      <a href="#"><FaBars /> Responsive</a>
      <a href="#"><FaPalette /> Styles</a>
      <a href="#"><FaUser /> Profile</a>
      <a href="#"><FaSignOutAlt /> Login</a>
      <a href="#"><FaExclamationCircle /> Error</a>
      <a href="#"><FaChevronDown /> Dropdown</a>
      <a href="#"><FaGithub /> GitHub</a>
      <a href="#"><FaVuejs /> Vue version</a>
    </nav>
    <button className="sidebar-logout" onClick={onSignout}><FaSignOutAlt /> Logout</button>
  </aside>
);

export default Sidebar; 