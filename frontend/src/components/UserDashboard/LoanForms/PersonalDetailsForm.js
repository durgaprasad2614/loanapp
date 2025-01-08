import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoanApplication.css";

const PersonalDetailsForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
  });

  const [error, setError] = useState(''); // Add error state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation if necessary
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }
    setError(''); // Clear error if validation passes
    navigate('/apply-loan/financial-details');
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-danger text-center">{error}</p>} {/* Display error if present */}
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label>First Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label>Last Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label>Phone</label>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <label>Age</label>
          </div>
          <div className="form-group">
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <label>Address</label>
          </div>
          <button type="submit">Next</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
