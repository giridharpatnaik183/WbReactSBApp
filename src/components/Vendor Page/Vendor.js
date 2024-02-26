import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vendor.css';

// Vendor component
const Vendor = () => {
  const [showAddUpdateVendorFrame, setShowAddUpdateVendorFrame] = useState(false);

  const handleAddVendorClick = () => {
    setShowAddUpdateVendorFrame(true);
  };

  const handleCancelVendorClick = () => {
    setShowAddUpdateVendorFrame(false);
  };

  const handleSaveVendor = () => {
    // Implement your save logic here
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-center mt-4 mb-4 font-heading">Vendor Screen</h1>
      </div>

      <div className="frame">
        <div className="frame-header">
          <h4 className="font-subheading">Vendor List</h4>
          <input type="text" placeholder="Search vendors" className="form-control search-bar" />
        </div>
        <div className="frame-content">
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Veh No</th>
                  <th>T.Name</th>
                  <th>Vendor</th>
                  <th>DL</th>
                  <th>Mining</th>
                  <th>Location</th>
                  <th>Material</th>
                  <th>M.Grade</th>
                  <th>Contact</th>
                  <th>Mail</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123ABC</td>
                  <td>TransportXYZ</td>
                  <td>Vendor A</td>
                  <td>DL12345</td>
                  <td>Mining Corp</td>
                  <td>Location XYZ</td>
                  <td>Iron Ore</td>
                  <td>Large</td>
                  <td>987-654-3210</td>
                  <td>vendorA@mail.com</td>
                  <td>
                    <button className="btn btn-primary ">Edit</button>
                  </td>
                </tr>
                {/* Add more vendor rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="buttons">
            <div className="action-buttons">
              <button className="btn btn-success" onClick={handleAddVendorClick}>Add Vendor</button>
              <button className="btn btn-danger">Delete Vendor</button>
              <button className="btn btn-warning">Edit Vendor</button>
            </div>
          </div>
        </div>
      </div>

      {showAddUpdateVendorFrame && (
        <div className="frame">
          <div className="frame-header">
            <h2 className="font-subheading">Add/Update Vendor</h2>
          </div>
          <div className="frame-content">
          <label htmlFor="vehicle-no">Vehicle No:</label>
            <input type="text" id="vehicle-no" className="form-control" placeholder="Enter vehicle number" />

            <label htmlFor="transport-name">Transport Name:</label>
            <input type="text" id="transport-name" className="form-control" placeholder="Enter transport name" />

            <label htmlFor="vendor-name">Vendor Name:</label>
            <input type="text" id="vendor-name" className="form-control" placeholder="Enter vendor name" />

            <label htmlFor="driver-dl">Driver DL:</label>
            <input type="text" id="driver-dl" className="form-control" placeholder="Enter driver DL" />

            <label htmlFor="mining">Mining:</label>
            <input type="text" id="mining" className="form-control" placeholder="Enter mining details" />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" className="form-control" placeholder="Enter location" />

            <label htmlFor="material">Material:</label>
            <input type="text" id="material" className="form-control" placeholder="Enter material" />

            <label htmlFor="grade-size">Grade Size:</label>
            <input type="text" id="grade-size" className="form-control" placeholder="Enter grade size" />

            <label htmlFor="contact-no">Contact No:</label>
            <input type="text" id="contact-no" className="form-control" placeholder="Enter contact number" />

            <label htmlFor="email">Mail:</label>
            <input type="text" id="email" className="form-control" placeholder="Enter email" />

            <div className="buttons mt-4">
              <button className="btn btn-primary" onClick={handleSaveVendor}>Save</button>
              <button className="btn btn-secondary" onClick={handleCancelVendorClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendor;
