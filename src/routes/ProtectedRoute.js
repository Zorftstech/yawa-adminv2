import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectCurrentToken } from 'src/features/slide/authSlice';
import { useRouter } from './hooks';

const ProtectedRoute = () => {

    const token = localStorage.getItem('accessToken');
const router = useRouter()
  const location = useLocation();
  
  if (!token) {
    console.log("not login it")
    // Redirect to the login page, but save the current location
    router.push("/")
  }

  return <Outlet />;
};

export default ProtectedRoute;