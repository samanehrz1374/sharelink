import React from 'react';
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ( { isPublic , isAuthorized }:any) =>{
    return ( isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;
