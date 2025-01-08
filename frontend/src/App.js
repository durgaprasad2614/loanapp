import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure this package is installed
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Home from "./components/Pages/Home";
import UserDashboard from "./components/UserDashboard/UserDashboard1";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import LoanApplications from "./components/AdminDashboard/LoanApplications";
import ApplicationReview from "./components/AdminDashboard/ApplicationReview";
import CreditAssessment from "./components/AdminDashboard/CreditAssessment";
import ReportsAnalytics from "./components/AdminDashboard/ReportsAnalytics";
import LoanApplication from "./components/UserDashboard/LoanForms/LoanApplicationForm"; // Assuming this is the main loan form component
import PersonalDetailsForm from "./components/UserDashboard/LoanForms/PersonalDetailsForm";
import FinancialDetailsForm from "./components/UserDashboard/LoanForms/FinancialDetailsForm";
import Acknowledgment from "./components/UserDashboard/Acknowledgment";
import UserHome from './components/UserDashboard/UserHome';
import LoanStatus from './components/UserDashboard/LoanStatus';

const App = () => {
  const [userRole, setUserRole] = useState(null);


  const applicationData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    age: 30,
    address: '123 Main St, City, Country',
    monthlyIncome: 50000,
    loanAmount: 300000,
    loanTenure: 36,
    cibilScore: 720,
    debtToIncomeRatio: 0.25,
    annualIncome: 600000,
    employerName: 'ABC Corp',
    designation: 'Software Engineer',
    status: 'Pending',
  };

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role); // Set role based on the token
      } catch (error) {
        console.error("Error decoding token:", error);
        setUserRole(null); // Reset if token is invalid
      }
    }
  }, [userRole]);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setUserRole(null); // Reset the user role state
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <Router>
      <Header userRole={userRole} handleLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/loan-applications" element={<LoanApplications />} />
        <Route path="/application-review" element={<ApplicationReview application={applicationData}/>} />
        <Route path="/credit-assessment" element={<CreditAssessment application={applicationData}/>} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        {/* User Routes */}
        <Route path="/apply-loan/personal-details" element={<PersonalDetailsForm />}/>
        <Route path="/apply-loan/financial-details" element={<FinancialDetailsForm />}/>
        <Route path="/acknowledgement" element={<Acknowledgment />}/>
        <Route path="/loan-status" element={<LoanStatus/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
