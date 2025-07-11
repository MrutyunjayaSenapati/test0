import React from 'react';
import { FaUsers, FaShoppingCart, FaChartLine, FaCog } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => (
  <main className="dashboard">
    <h2 className="dashboard-title">Overview</h2>
    <div className="dashboard-cards">
      <div className="dashboard-card">
        <div className="dashboard-card-header">
          <span className="dashboard-card-growth up">+12%</span>
          <FaCog className="dashboard-card-settings" />
        </div>
        <div className="dashboard-card-content">
          <span>Clients</span>
          <h3>512</h3>
          <FaUsers className="dashboard-card-icon" />
        </div>
      </div>
      <div className="dashboard-card">
        <div className="dashboard-card-header">
          <span className="dashboard-card-growth down">-16%</span>
          <FaCog className="dashboard-card-settings" />
        </div>
        <div className="dashboard-card-content">
          <span>Sales</span>
          <h3>$7,770</h3>
          <FaShoppingCart className="dashboard-card-icon" />
        </div>
      </div>
      <div className="dashboard-card">
        <div className="dashboard-card-header">
          <span className="dashboard-card-growth overflow">Overflow</span>
          <FaCog className="dashboard-card-settings" />
        </div>
        <div className="dashboard-card-content">
          <span>Performance</span>
          <h3>256%</h3>
          <FaChartLine className="dashboard-card-icon" />
        </div>
      </div>
    </div>
    <div className="dashboard-transactions">
      <div className="dashboard-transaction">$375.53 - 3 days ago - Howell Hand - 70%</div>
      <div className="dashboard-transaction">$470.26 - 3 days ago - Hope Howe - 68%</div>
      <div className="dashboard-transaction">$971.34 - 5 days ago - Nelson Jerde - 49%</div>
      <div className="dashboard-transaction">$374.63 - 2 days ago - Kim Weimann - 92%</div>
    </div>
  </main>
);

export default Dashboard; 