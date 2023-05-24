import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {

    const accessToken = useSelector(({user}) => user.accessToken);

    if (accessToken) return <Navigate to={'/'} replace/>;

    return children;    
};

export default PublicRoute;