import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

export default function PrivateRoutes({ Component }) {
  const { isAuthenticated } = useAuth();

  const location = useLocation();
  if (isAuthenticated) return <Component />;
  else {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
}
