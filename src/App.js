//import OperationNavBar from './Operations/NavBar/NavBar';
//import MainScreen from './MainScreen';
import { createContext, useState } from "react"
import Login from './components/account/Login';
import Home from './components/dashboard/Home';
import PrivateRoute from './components/security/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import './App.css';


export const baseUrlContext = createContext()

function App() {


  return (
    <div className="App">
      <baseUrlContext.Provider value={'http://localhost:8000'}>
        <UserProvider>
          <Switch>
            <PrivateRoute path="/" endpoint="/statistics" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </UserProvider>
      </baseUrlContext.Provider>
    </div>
  );
}

export default App;
