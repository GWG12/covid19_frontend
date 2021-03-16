import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from '../../helpers/axiosInstance.js';
import { useContext } from 'react';
import jwt_decode from 'jwt-decode';
import React, { useState, useEffect } from 'react';


const PrivateRoute = ({ component, ...rest }) => {

    const [data, setData] = useState(null);
    //console.log('el estado ', loginScreenState)

    const user = localStorage.getItem('userId');

    const token = localStorage.getItem('token');
    console.log('el resto ', rest)
    console.log('el path ', rest.path)
    console.log('el token ', token)
    console.log('el token contextO ', user)
    console.log('component ', component)
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