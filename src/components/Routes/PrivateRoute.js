import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthProvider);
  const location = useLocation();

  if (loader) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
