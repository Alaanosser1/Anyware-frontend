import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AUTH_STORAGE_KEY = "authStatus";

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();
    const isAuthenticated =
      localStorage.getItem(AUTH_STORAGE_KEY) === "authenticated";

    useEffect(() => {
      if (!isAuthenticated) {
        // Use navigate to redirect to the login route
        navigate("/");
      }
    }, [isAuthenticated, navigate]);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return null; // You can return null or another component here
    }
  };
};

export default withAuth;
