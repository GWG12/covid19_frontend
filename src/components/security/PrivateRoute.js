import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
    const [loginScreenState, setLoginScreenState] = useState(true);
    console.log('el estado ', loginScreenState)


    return (
        <Route {...rest} render={() => {
            return fakeAuth.isAuthenticated ? children
                : <Redirect to='' />
        }} />
    )
}

export default PrivateRoute;