import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [users, setUsers] = useState([{ username: 'admin', password: 'admin' }]);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleSignup = (username, password) => {
    if (users.find(u => u.username === username)) {
      return false;
    }
    setUsers([...users, { username, password }]);
    setShowSignup(false);
    return true;
  };

  const handleSignout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    if (showSignup) {
      return <Signup onSignup={handleSignup} onSwitchToLogin={() => setShowSignup(false)} />;
    }
    return <Login onLogin={handleLogin} onSwitchToSignup={() => setShowSignup(true)} />;
  }

  return (
    <div className="admin-dashboard">
      <Sidebar onSignout={handleSignout} />
      <div className="main-content">
        <Header onSignout={handleSignout} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
