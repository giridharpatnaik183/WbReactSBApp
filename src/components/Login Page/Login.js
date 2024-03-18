import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9090/check?role=${role}&userId=${userId}&password=${password}`
      );
      console.log(response.data)
      // const responseMessage = response.data.trim(); // Trim any leading/trailing whitespace
      // Login successful!
      if (response.data === "Login successful!") {
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'user') {
          navigate('/user');
        } else {
          alert('Invalid role');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      console.error('Server response:', error.response?.data);
      alert('An error occurred during login');
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
              <option value="user">Supervisor</option>
              <option value="admin">TruckDetails</option>
              <option value="user">Manager</option>
              <option value="admin">Vendor</option>
              <option value="user">Qc</option>
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