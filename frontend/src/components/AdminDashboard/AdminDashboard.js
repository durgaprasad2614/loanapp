import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Optional CSS file for styling

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dashboard sections data
  const dashboardSections = [
    {
      title: "Manage Applications",
      description: "View and process loan applications submitted by users.",
      icon: "fa-file",
      route: "/applications",
    },
    {
      title: "Loan Reports",
      description: "Generate and review loan performance and user metrics.",
      icon: "fa-chart-line",
      route: "/report-card",
    },
    {
      title: "Contact Users",
      description: "Communicate with users for loan-related queries and updates.",
      icon: "fa-envelope",
      route: "/contact",
    },
  ];

  // Recent activity data
  const recentActivities = [
    {
      title: "New Loan Application",
      description: "A new loan application has been submitted. Review the details to proceed with the approval process.",
      icon: "fa-check-circle",
    },
    {
      title: "Application Rejected",
      description: "An application has been rejected due to incomplete documentation. Notify the user with the reason.",
      icon: "fa-times-circle",
    },
    {
      title: "Loan Report Generated",
      description: "A new loan performance report has been generated. Review the metrics for further insights.",
      icon: "fa-exclamation-circle",
    },
  ];

  const profileManagementSections = [
    {
      title: "Update Profile Information",
      description: "Modify your name, email, and profile picture for better personalization of your admin account.",
      icon: "fa-user-edit",
    },
    {
      title: "Change Password",
      description: "Ensure your account's security by updating your password regularly.",
      icon: "fa-lock",
    },
  ];

  return (
    <div className="admin-dashboard container mt-5 border-20 pb-5">
      <div className='sec1'>
        <div className="text-center mb-4">
          <h3 className='text-primary'>Welcome to the Admin Dashboard</h3>
          <p className='text-xsmall'>Manage loan applications, generate reports, and communicate with users.</p>
        </div>

        <div className="row">
          {dashboardSections.map((section, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="dashboard-card" onClick={() => navigate(section.route)}>
                <div className="card-icon">
                  <span className={`fa ${section.icon}`}></span>
                </div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='sec1 mt-3'>
        <div className="text-center mt-5">
          <h3 className='text-center text-primary'><b>Additional Information</b></h3>
          <p>This dashboard is designed to give administrators control over the loan application process. You can review applications, assess reports, and easily communicate with users to ensure the smooth operation of the loan system.</p>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-4">
          <h4 className='text-center text-primary'>Recent Activity</h4>
          <div className="row">
            {recentActivities.map((activity, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="dashboard-card activity-card">
                  <div className="card-icon">
                    <span className={`fa ${activity.icon}`}></span>
                  </div>
                  <h5>{activity.title}</h5>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Management Section */}
      <div className='sec1 mt-4'>
        <div className="text-center">
          <h3 className='text-center text-primary'>Profile Management</h3>
          <p className='text-xsmall'>
            In this section, administrators can update their personal details, change their login password, and manage other preferences for a secure and personalized dashboard experience.
          </p>
        </div>

        <div className="row">
          {profileManagementSections.map((section, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="dashboard-card">
                <div className="card-icon">
                  <span className={`fa ${section.icon}`}></span>
                </div>
                <h4>{section.title}</h4>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AdminDashboard;
