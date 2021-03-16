import { useState, useEffect } from 'react';
import axios from 'axios';

/*
export default function useValidateSession() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect((endpoint) => {
        async function validateSession() {
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
                setLoading(false);
            }
        }
        findUser();
    }, []);
    return {
        user,
        isLoading
    }
}
*/