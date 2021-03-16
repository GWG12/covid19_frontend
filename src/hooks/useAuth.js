import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { parseToken } from '../helpers/parsers';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

/*
export default function useAuth() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [error, setError] = useState(null);
    //set user in context and push them home
    const setUserContext = async (endpoint) => {

        try {
            const res = await axios({
                method: 'GET',
                url: apiBaseUrl + endpoint,
                headers: {
                    "Authorization": "Bearer " + parseToken()
                },
                timeout: 5000,
            });
            console.log('res data ', res.data)
            localStorage.setItem('token', res.data.access_token);
            setUser(res.data.currentUser);

            setData(resp.data);
            const defaultProps = {
                options: resp.data,
            }
            setDefaultProps(defaultProps);
        } catch (err) {
            console.log('En el error de middleware jwt')
            setError(err);
        }


        const res = await axios.get('/user')
        return await axios.get('/user').then(res => {
            setUser(res.data.currentUser);
            history.push('/home');
        }).catch((err) => {
            setError(err.response.data);
        })
    }
    //register user
    const registerUser = async (payload) => {
        try {
            const res = await axios({
                method: 'POST',
                url: apiBaseUrl + 'auth/signup',
                timeout: 5000,
                data: payload,
            });
            setUser(res.data.id);
            localStorage.setItem('token', res.data.access_token);
            await setUserContext;
        } catch (err) {
            console.log(err)
            setError(error);
        }


        const { email, password, passwordConfirm } = data;
        return axios.post(`auth/register`, {
            username, email, password, passwordConfirm
        }).then(async () => {
            await setUserContext();
        }).catch((err) => {
            setError(err.response.data);
        })
    };
    return {
        registerUser,
        error
    }
}
*/