import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const {loading,user}= use(AuthContext)
    const location = useLocation()
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (user) {
      return children;
    }
      return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;