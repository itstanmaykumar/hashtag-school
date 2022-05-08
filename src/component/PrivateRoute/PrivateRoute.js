import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.init';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <p>Loading....</p>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;