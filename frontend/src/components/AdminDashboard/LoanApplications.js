import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LoanApplications.css';

const LoanApplicationPage = () => {
  const [loanApplications, setLoanApplications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      console.log('laon-app')
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:5000/api/user/loan-applications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoanApplications(response.data);
      } catch (err) {
        console.error('Error fetching loan applications:', err);
        setError('Unable to fetch loan applications. Please try again later.');
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="loan-application-container">
      <h1>Loan Application Page</h1>
      {error && <p className="text-danger">{error}</p>}
      <table className="loan-application-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Address</th>
            <th>Monthly Income</th>
            <th>Requested Loan Amount</th>
            <th>Tenure</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loanApplications.map((application) => (
            <tr key={application._id}>
              <td>{application.personalDetails.name}</td>
              <td>{application.personalDetails.email}</td>
              <td>{application.personalDetails.phone}</td>
              <td>{application.personalDetails.age}</td>
              <td>{application.personalDetails.address}</td>
              <td>{application.financialDetails.monthlyIncome}</td>
              <td>{application.financialDetails.requestedLoanAmount}</td>
              <td>{application.financialDetails.tenure} months</td>
              <td>{application.status}
                {/* <button className={`status-btn ${application.status.toLowerCase()}`}>
                  {application.status}
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplicationPage;
