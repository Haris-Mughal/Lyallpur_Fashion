import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const userRoleData = localStorage.getItem("userRole");
  const userRole = JSON.parse(userRoleData);

  console.log("Role to check", userRole);
  const location = useLocation();
  if (!userRoleData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : userRole ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
