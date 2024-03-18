// CreateUser.js

import React, { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    role: 'manager',
    responsibility: '',
    contactNo: '',
    email: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const saveUser = () => {
    // Do something with userDetails, e.g., send to server or save in local storage
    console.log('User Details:', userDetails);
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={userDetails.role}
          onChange={handleChange}
          required
        >
          <option value="manager">Manager</option>
          <option value="supervisor">Supervisor</option>
          {/* Add more roles as needed */}
        </select>

        <label htmlFor="responsibility">Responsibility:</label>
        <input
          type="text"
          id="responsibility"
          name="responsibility"
          value={userDetails.responsibility}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNo">ContactNo:</label>
        <input
          type="tel"
          id="contactNo"
          name="contactNo"
          value={userDetails.contactNo}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={userDetails.date}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={saveUser}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
