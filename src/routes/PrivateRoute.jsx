import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { SyncLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const {user,loading}= use(AuthContext)
    const location = useLocation()
    if (loading) {
        return <SyncLoader color="#FFB84C" />;
    }
    if (user) {
      return children;
    }
      return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;