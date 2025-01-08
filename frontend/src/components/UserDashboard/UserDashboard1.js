import React from "react";
import {FaHeadset, FaCalculator, FaHistory, FaFileSignature, FaCalendarCheck, FaUserCog } from "react-icons/fa"; // Importing icons
import "./UserDashboard.css";

const UserDashboard = () => {
  const dashboardSections = [
    {
      title: "Loan History",
      description: "Track all your past loan applications and approvals.",
      icon: <FaHistory />,
      buttonText: "View History",
    },
    {
      title: "New Loan Application",
      description: "Apply for a new loan with our quick and easy application process.",
      icon: <FaFileSignature />,
      buttonText: "Apply Now",
    },
    {
      title: "Repayment Schedule",
      description: "View and manage your loan repayment schedules easily.",
      icon: <FaCalendarCheck />,
      buttonText: "View Schedule",
    },
    {
      title: "Profile Settings",
      description: "Update your personal and contact information.",
      icon: <FaUserCog />,
      buttonText: "Update Profile",
    },
    {
      title: "Loan Calculator",
      description: "Estimate your loan repayments with our simple calculator.",
      icon: <FaCalculator />,
      buttonText: "Use Calculator",
    },
    {
      title: "Customer Support",
      description: "Get assistance and support for your loan inquiries.",
      icon: <FaHeadset />,
      buttonText: "Contact Support",
    },
  ];


  return (
    <section id="user-dashboard">
      <div className="container">
        <h2 className="text-center text-primary py-3"><b>Welcome To User Dashboard</b></h2>
        <div className="row justify-content-between">
          {dashboardSections.map((section, index) => (
            <div className="col-md-4 col-sm-12 mb-4" key={index}>
              <div className="user-dashboard-card">
                <div className="user-dashboard-icon">{section.icon}</div> {/* Displaying icon */}
                <h6 className="user-dashboard-title">{section.title}</h6>
                <p className="user-dashboard-description">{section.description}</p>
                {/* <p className="user-dashboard-date">Date: {section.date}</p> */}
                <button className="user-dashboard-btn">{section.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
