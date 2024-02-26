// Admin.js
import React, { useEffect } from 'react';
import './Admin.css'; 
function Admin() {
  // useEffect to set today's date on component mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("datePicker").value = today;
  }, []);

  // Function to handle redirection to add_user_dashboard
  const redirectToAddUserDashboard = () => {
    window.location.href = 'add_user_dashboard.html';
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <div id="navbar-left">
            <input type="date" id="datePicker" />
            <select id="selectDropdown">
              <option value="Vikram">Vikram</option>
              <option value="Highlander">Highlander</option>
            </select>
          </div>
        </div>
        <h1 className="header-title">Admin Screen</h1>
      </header>

      <div className="container">
        {/* User Management Frame */}
        <div className="frame">
          <div className="frame-header">
            <h2>User Management</h2>
            <input type="text" placeholder="Search users" className="form-control" />&nbsp;
            <button id="add-user" onClick={redirectToAddUserDashboard} className="btn btn-success">Add User</button>
          </div>
          <div className="filters">
            <label htmlFor="role-filter">Filter by Role:</label>
            <select id="role-filter" className="form-control">
              <option value="all">All</option>
              <option value="manager">Manager</option>
              <option value="supervisor">Supervisor</option>
            </select>
            <label htmlFor="status-filter">Filter by Status:</label>
            <select id="status-filter" className="form-control">
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="frame-content">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Responsibility</th>
                  <th>ContactNo</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th colSpan="2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Manager</td>
                  <td>Manage Teams</td>
                  <td>123-456-7890</td>
                  <td>john.doe@example.com</td>
                  <td>2022-01-05</td>
                  <td>Active</td>
                  <td><button className="btn btn-primary">Edit User</button></td>
                  <td><button className="btn btn-danger">Remove User</button></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Supervisor</td>
                  <td>Quality Control</td>
                  <td>987-654-3210</td>
                  <td>jane.smith@example.com</td>
                  <td>2022-01-06</td>
                  <td>Inactive</td>
                  <td><button className="btn btn-primary">Edit User</button></td>
                  <td><button className="btn btn-danger">Remove User</button></td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsibility Assignment Frame */}
        <div className="frame">
          <div className="frame-header">
            <h2>Responsibility Assignment</h2>
          </div>
          <div className="frame-content">
            <div className="responsibility-assignment">
              <label htmlFor="user-list">Select User:</label>
              <select id="user-list" className="form-control">
                {/* User list will be dynamically populated here */}
              </select>
              <label htmlFor="responsibility-list">Select Responsibility:</label>
              <select id="responsibility-list" className="form-control">
                <option value="manage-teams">Manage Teams</option>
                <option value="quality-control">Quality Control</option>
                {/* Add more responsibilities as needed */}
              </select>
              <button id="assign-responsibility" className="btn btn-primary">Assign Responsibility</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
