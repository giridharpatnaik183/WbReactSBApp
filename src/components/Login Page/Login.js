// Login.js
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const submitForm =() => {
    // Add your AJAX request logic here
    console.log('Submitting form:', role, userId, password);
    const data=axios.post(`http://localhost:8080/check?role=${role}&userId=${userId}&password=${password}`);
    alert('login successfull')
    if (role === 'admin') {
      navigate('/admin');
    }
    if (role === 'Vendor') {
      navigate('/vendor');
    } 
    if(role === '/home'){
      navigate('/home');
    }    
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://ldtech.in/wp-content/uploads/2024/01/logo.png"
            alt="WeighBridge Management App Logo"
          />
        </div>
        <h2>WeighBridge App</h2>
        <div className="form-group">
          <form>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="Supervisor">Supervisor</option>
              <option value="TruckDetails">TruckDetails</option>
              <option value="Manager">Manager</option>
              <option value="Vendor">Vendor</option>
              <option value="Qc">Qc</option>
            </select>
            <div>
              <label htmlFor="userId">UserId:</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="button" onClick={submitForm}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
