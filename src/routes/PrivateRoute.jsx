import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);

    // loader
    if(loading){
        return <div><h2>Loading.......</h2></div>
    }
  

    if(user){
        return children;
    }
    return<Navigate state={{from: location}} to='/Info/login' replace></Navigate> ;
};

export default PrivateRoute;