import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  let location = useLocation();
  if(user){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;