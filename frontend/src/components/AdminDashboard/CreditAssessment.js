import React, { useState } from 'react';

const CreditAssessment = ({ application }) => {
  const [decision, setDecision] = useState('');

  const calculateCreditworthiness = () => {
    const cibilScore = application.cibilScore;
    const dti = application.debtToIncomeRatio;
    const annualIncome = application.annualIncome;
    const loanAmount = application.loanAmount;

    let creditworthinessScore = 0;
    let financialStabilityScore = 0;

    // Evaluate Creditworthiness (CIBIL Score + DTI)
    if (cibilScore >= 750) creditworthinessScore += 50;
    else if (cibilScore >= 700) creditworthinessScore += 40;
    else creditworthinessScore += 30;

    if (dti <= 0.30) creditworthinessScore += 50;
    else if (dti <= 0.50) creditworthinessScore += 30;
    else creditworthinessScore += 10;

    // Evaluate Financial Stability (Annual Income + Employment Reliability)
    if (annualIncome >= loanAmount * 3) financialStabilityScore += 50;
    else if (annualIncome >= loanAmount * 2) financialStabilityScore += 30;
    else financialStabilityScore += 10;

    const overallScore = creditworthinessScore + financialStabilityScore;

    // Final Decision
    if (overallScore >= 80) {
      setDecision('Eligible for Loan');
    } else {
      setDecision('Not Eligible for Loan');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Credit Assessment</h2>

        <div className="row gy-3">
          {/* CIBIL Score Card */}
          <div className="col-md-6">
            <div className="card text-center p-4 border-0 shadow-sm">
              <div className="card-body">
                <i className="fa fa-chart-bar fa-3x text-success mb-3"></i>
                <h5 className="card-title">CIBIL Score</h5>
                <p className="card-text fs-4">{application.cibilScore}</p>
              </div>
            </div>
          </div>

          {/* Debt-to-Income Ratio Card */}
          <div className="col-md-6">
            <div className="card text-center p-4 border-0 shadow-sm">
              <div className="card-body">
                <i className="fa fa-balance-scale fa-3x text-warning mb-3"></i>
                <h5 className="card-title">Debt-to-Income Ratio</h5>
                <p className="card-text fs-4">{application.debtToIncomeRatio}</p>
              </div>
            </div>
          </div>

          {/* Annual Income Card */}
          <div className="col-md-6">
            <div className="card text-center p-4 border-0 shadow-sm">
              <div className="card-body">
                <i className="fa fa-wallet fa-3x text-info mb-3"></i>
                <h5 className="card-title">Annual Income</h5>
                <p className="card-text fs-4">₹{application.annualIncome}</p>
              </div>
            </div>
          </div>

          {/* Requested Loan Amount Card */}
          <div className="col-md-6">
            <div className="card text-center p-4 border-0 shadow-sm">
              <div className="card-body">
                <i className="fa fa-coins fa-3x text-danger mb-3"></i>
                <h5 className="card-title">Requested Loan Amount</h5>
                <p className="card-text fs-4">₹{application.loanAmount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Assess Creditworthiness Button */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary px-5 py-3 fs-5 rounded-3 shadow"
            onClick={calculateCreditworthiness}
          >
            <i className="fa fa-calculator me-2"></i> Assess Creditworthiness
          </button>
        </div>

        {/* Decision Display */}
        {decision && (
          <div className="text-center mt-4">
            <h3 className={`mt-4 ${decision === "Approved" ? "text-success" : "text-danger"}`}>
              {decision}
            </h3>
          </div>
        )}
      </div>
    </div>

  );
};

export default CreditAssessment;
