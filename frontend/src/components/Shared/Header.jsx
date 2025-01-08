import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = ({ userRole, handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLinkClick = (route) => {
    closeSidebar(); // Close the sidebar on navigation
    navigate(route); // Navigate to the specified route
  };

  return (
    <>
      <nav className={`nav ${isSidebarOpen ? "open" : ""}`}>
        {/* Logo and Toggle Button */}
        <div className="logo">
          <i
            className={`bi ${
              isSidebarOpen ? "bi-x" : "bi-list"
            } menu-icon me-5`}
            onClick={toggleSidebar}
          ></i>
          <span className="logo-name pt-3">Loan App</span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar mt-5 ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <ul className="lists">
            {/* Common Workflow Items */}
            <li className="list">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleLinkClick("/")}
              >
                <i className="bi bi-house-door icon"></i>
                <span className="link">Home</span>
              </Link>
            </li>

            {/* Public Pages (visible only when not logged in) */}
            {userRole === null && (
              <>
                <li className="list">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={() => handleLinkClick("/login")}
                  >
                    <i className="bi bi-box-arrow-in-right icon"></i>
                    <span className="link">Login</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/signup"
                    className="nav-link"
                    onClick={() => handleLinkClick("/signup")}
                  >
                    <i className="bi bi-person-plus icon"></i>
                    <span className="link">Sign Up</span>
                  </Link>
                </li>
              </>
            )}

            {/* User Workflow Items */}
            {userRole === "user" && (
              <>
                <li className="list">
                  <Link
                    to="/userhome"
                    className="nav-link"
                    onClick={() => handleLinkClick("/userhome")}
                  >
                    <i className="bi bi-house-door icon"></i>
                    <span className="link">User Home</span>
                  </Link>
                </li>

                <li className="list">
                  <Link
                    to="/userdashboard"
                    className="nav-link"
                    onClick={() => handleLinkClick("/userdashboard")}
                  >
                    <i className="bi bi-person-circle icon"></i>
                    <span className="link">User Dashboard</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/apply-loan"
                    className="nav-link"
                    onClick={() => handleLinkClick("/apply-loan")}
                  >
                    <i className="bi bi-pencil-square icon"></i>
                    <span className="link">Apply Loan</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/loan-status"
                    className="nav-link"
                    onClick={() => handleLinkClick("/loan-status")}
                  >
                    <i className="bi bi-bar-chart icon"></i>
                    <span className="link">Loan Status</span>
                  </Link>
                </li>
                <li className="list">
                  <a href="/" className="nav-link" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right icon"></i>
                    <span className="link">Logout</span>
                  </a>
                </li>
              </>
            )}

            {/* Admin Workflow Items */}
            {userRole === "admin" && (
              <>
                <li className="list">
                  <Link
                    to="/admin-dashboard"
                    className="nav-link"
                    onClick={() => handleLinkClick("/admin-dashboard")}
                  >
                    <i className="bi bi-speedometer2 icon"></i>
                    <span className="link">Admin Dashboard</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/loan-applications"
                    className="nav-link"
                    onClick={() => handleLinkClick("/loan-applications")}
                  >
                    <i className="bi bi-file-earmark-text icon"></i>
                    <span className="link">Loan Applications</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/application-review"
                    className="nav-link"
                    onClick={() => handleLinkClick("/application-review")}
                  >
                    <i className="bi bi-check-circle icon"></i>
                    <span className="link">Application Review</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/credit-assessment"
                    className="nav-link"
                    onClick={() => handleLinkClick("/credit-assessment")}
                  >
                    <i className="bi bi-graph-up icon"></i>
                    <span className="link">Credit Assessment</span>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/reports-analytics"
                    className="nav-link"
                    onClick={() => handleLinkClick("/reports-analytics")}
                  >
                    <i className="bi bi-pie-chart icon"></i>
                    <span className="link">Reports & Analytics</span>
                  </Link>
                </li>
                <li className="list">
                  <button className="nav-link" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right icon"></i>
                    <span className="link">Logout</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <section className="overlay" onClick={closeSidebar}></section>
      )}

      {/* Toggle Button */}
      <button
        className={`toggle-btn ${isSidebarOpen ? "d-none" : ""}`}
        onClick={toggleSidebar}
      >
        <i className="bi bi-list"></i>
      </button>
    </>
  );
};

export default Header;
