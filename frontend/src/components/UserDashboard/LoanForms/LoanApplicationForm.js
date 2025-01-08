import React, { useState } from 'react';
import axios from 'axios';
import "./LoanApplication.css"

const LoanApplicationForm = () => {
  const [step, setStep] = useState(1); // Current step of the form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    monthlyIncome: '',
    loanAmount: '',
    loanTenure: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (
      step === 1 &&
      (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.age || !formData.address)
    ) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const handlePrev = () => {
    setError('');
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.monthlyIncome || !formData.loanAmount || !formData.loanTenure) {
      setError('Please fill in all required fields.');
      return;
    }

    setError('');
    try {
      const token = localStorage.getItem('authToken'); // Or get it from wherever you store the JWT
  
      if (!token) {
        setError('User not authenticated. Please log in.');
        return;
      }
  
      const response = await axios.post(
        'http://localhost:5000/api/user/apply',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          address: formData.address,
          monthlyIncome: formData.monthlyIncome,
          loanAmount: formData.loanAmount,
          loanTenure: formData.loanTenure,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the Authorization header
          },
        }
      );
  
      alert('Application submitted successfully!');
      console.log('Response:', response.data);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('An error occurred while submitting your application. Please try again.');
    }
  };

  return (
    <div className="loan-app-container d-flex justify-content-center align-items-center">
      <div className="loan-app-row w-100">
        <div className="loan-app-card">
          <div className="loan-app-form-container">
            <form className="loan-app-form" onSubmit={handleSubmit}>
              <h2 className="loan-app-heading">{step === 1 ? 'Personal Details' : 'Financial Details'}</h2>
              {error && <p className="loan-app-error">{error}</p>}
              {step === 1 ? (
                <>
                  <div className="loan-app-group">
                    <label htmlFor="firstName" className="loan-app-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="lastName" className="loan-app-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="email" className="loan-app-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="phone" className="loan-app-label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="age" className="loan-app-label">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="address" className="loan-app-label">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="loan-app-textarea"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="button" className="loan-app-btn-primary" onClick={handleNext}>
                    Next
                  </button>
                </>
              ) : (
                <>
                  <div className="loan-app-group">
                    <label htmlFor="monthlyIncome" className="loan-app-label">Monthly Income</label>
                    <input
                      type="number"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="loanAmount" className="loan-app-label">Requested Loan Amount</label>
                    <input
                      type="number"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-group">
                    <label htmlFor="loanTenure" className="loan-app-label">Loan Tenure (in months)</label>
                    <input
                      type="number"
                      id="loanTenure"
                      name="loanTenure"
                      value={formData.loanTenure}
                      onChange={handleInputChange}
                      className="loan-app-input"
                      required
                    />
                  </div>
                  <div className="loan-app-buttons">
                    <button type="button" className=" btn loan-app-btn-primary" onClick={handlePrev}>
                      Previous
                    </button>
                    <button type="submit" className="loan-app-btn-primary">
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
