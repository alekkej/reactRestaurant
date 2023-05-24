import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const accessToken = useSelector(({user}) => user.accessToken);

    if (!accessToken) return <Navigate to={'/auth'} replace/>;

    return children;    
};

export default PrivateRoute;