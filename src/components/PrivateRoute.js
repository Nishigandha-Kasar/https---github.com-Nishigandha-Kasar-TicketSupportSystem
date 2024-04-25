import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo }) => {
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.user?.role);

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  if (userRole === 'admin' && children.type.displayName === 'AdminDashboard') {
    return children; // Render AdminDashboard for admin role
  } else if (children.type.displayName === 'EndUserDashboard') {
    return children; // Render EndUserDashboard for other roles
  }

  return <Navigate to={redirectTo} replace />; // Redirect if not authorized
};

export default ProtectedRoute;
