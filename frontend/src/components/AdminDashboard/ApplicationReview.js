import React from 'react';
import './ApplicationReview.css';

const ApplicationReview = ({ application }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="card col-md-8 shadow-lg p-4">
          <h2 className="text-center text-primary mb-4">Application Review</h2>

          {/* Applicant Details */}
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-success">Applicant Details</h3>
              <p><strong>Name:</strong> {application.name}</p>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phone}</p>
              <p><strong>Age:</strong> {application.age}</p>
              <p><strong>Address:</strong> {application.address}</p>
            </div>
          </div>

          {/* Financial Details */}
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-success">Financial Details</h3>
              <p><strong>Monthly Income:</strong> ₹{application.monthlyIncome}</p>
              <p><strong>Loan Amount Requested:</strong> ₹{application.loanAmount}</p>
              <p><strong>Loan Tenure (Months):</strong> {application.loanTenure}</p>
            </div>
          </div>

          {/* CIBIL Data */}
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-success">CIBIL Data</h3>
              <p><strong>CIBIL Score:</strong> {application.cibilScore}</p>
              <p><strong>Debt-to-Income Ratio:</strong> {application.debtToIncomeRatio}</p>
            </div>
          </div>

          {/* Bank Data */}
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-success">Bank Data</h3>
              <p><strong>Employer Name:</strong> {application.employerName}</p>
              <p><strong>Designation:</strong> {application.designation}</p>
            </div>
          </div>

          {/* Application Status */}
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="text-success">Application Status</h3>
              <p><strong>Status:</strong> {application.status}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="row">
            <div className="col-6 text-start">
              <button className="btn btn-success w-100">Approve Loan</button>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-danger w-100">Reject Loan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
