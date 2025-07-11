import React from 'react';
import { FaBars, FaBell, FaCog, FaGithub, FaUserCircle, FaChevronDown, FaStar, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSignout }) => (
  <header className="header">
    <div className="header-left">
      <FaBars className="header-menu-icon" />
      <input className="header-search" type="text" placeholder="Search" />
    </div>
    <div className="header-center">
      <span className="header-menu">Sample menu <FaChevronDown /></span>
    </div>
    <div className="header-right">
      <FaUserCircle className="header-avatar" />
      <span className="header-username">John Doe <FaChevronDown /></span>
      <FaCog className="header-icon" />
      <FaBell className="header-icon" />
      <FaGithub className="header-icon" />
      <FaStar className="header-github-star" />
      <button className="header-logout-btn" onClick={onSignout}><FaSignOutAlt /> Logout</button>
    </div>
  </header>
);

export default Header; 