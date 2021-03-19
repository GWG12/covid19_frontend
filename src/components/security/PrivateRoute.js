import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';


const PrivateRoute = ({ component, ...rest }) => {

    const [data, setData] = useState(null);

    const user = localStorage.getItem('userId');

    const token = localStorage.getItem('token');
    const Component = component;
    const newProps = { ...rest }
    let decodedToken;
    try {
        decodedToken = jwt_decode(token);
    } catch (err) {
        decodedToken = null;
    }

    return (
        <Route {...rest} render={() => {
            return ((!decodedToken || !user) || (decodedToken.id !== user) ? <Redirect to='/login' />
                : <Component {...newProps} />
            )
        }} />
    )
}

export default PrivateRoute;