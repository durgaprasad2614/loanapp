import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialDetailsForm = () => {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    loanAmount: '',
    loanTenure: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.monthlyIncome || !formData.loanAmount || !formData.loanTenure) {
      setError('Please fill in all required fields.');
      return;
    }
    setError(''); // Clear error if validation passes
    navigate('/acknowledgement');
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="shadow-lg p-4 rounded bg-light">
            <form className="d-flex flex-column" onSubmit={handleFormSubmit}>
              <h2 className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Financial Details
              </h2>
              {error && <p className="text-danger text-center">{error}</p>} {/* Display error if present */}
              <div className="mb-3">
                <label htmlFor="monthlyIncome" className="form-label">
                  Monthly Income
                </label>
                <input
                  type="number"
                  id="monthlyIncome"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  placeholder="Enter your monthly income"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loanAmount" className="form-label">
                  Requested Loan Amount
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  placeholder="Enter the requested loan amount"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loanTenure" className="form-label">
                  Loan Tenure (in months)
                </label>
                <input
                  type="number"
                  id="loanTenure"
                  name="loanTenure"
                  value={formData.loanTenure}
                  onChange={handleInputChange}
                  placeholder="Enter the loan tenure in months"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDetailsForm;
