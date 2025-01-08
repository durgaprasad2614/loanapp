import React from "react";
import "./LoanStatus.css";

const LoanStatus = () => {
  // JSON array of loan applications
  const loanApplications = [
    {
      id: "123456",
      status: "Approved",
      description: "Congratulations! Your loan has been approved successfully. Funds will be disbursed shortly.",
      icon: "fa-check-circle",
      statusClass: "text-success",
      cardClass: "approved-card"
    },
    {
      id: "789012",
      status: "Pending",
      description: "Your application is under review. We are evaluating your details and will notify you soon.",
      icon: "fa-hourglass-half",
      statusClass: "text-warning",
      cardClass: "pending-card"
    },
    {
      id: "345678",
      status: "Rejected",
      description: "We regret to inform you that your loan application has been rejected. Contact support for help.",
      icon: "fa-times-circle",
      statusClass: "text-danger",
      cardClass: "rejected-card"
    }
  ];

  return (
    <div className="loan-status-container container mt-5">
      <h2 className="text-primary text-center mb-4">Your Loan Applications</h2>
      <p className="text-center mb-5">
        Below is the status of your loan applications. If you have any questions, please contact our support team.
      </p>
      <div className="row">
        {loanApplications.map((loan) => (
          <div className="col-md-4 mb-4" key={loan.id}>
            <div className={`loan-card ${loan.cardClass}`}>
              <div className="card-icon">
                <span className={`fa ${loan.icon}`}></span>
              </div>
              <h4>Loan ID: {loan.id}</h4>
              <p>
                Status: <span className={loan.statusClass}>{loan.status}</span>
              </p>
              <p className="loan-description">{loan.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-primary">Need Assistance?</h3>
        <p>
          If you have any questions about your loan applications, reach out to our{" "}
          <a href="/support" className="text-link">support team</a>.
        </p>
        <button className="btn btn-primary">Contact Support</button>
      </div>
    </div>
  );
};

export default LoanStatus;
