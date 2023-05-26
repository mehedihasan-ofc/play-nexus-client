import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if(isLoading) {
        return;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;