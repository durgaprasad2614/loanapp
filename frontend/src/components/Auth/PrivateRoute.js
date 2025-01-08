import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ role }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    // Redirect based on user role
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
