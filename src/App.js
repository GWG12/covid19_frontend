import { createContext } from "react"
import Login from './components/account/Login';
import Home from './components/dashboard/Home';
import Country from './components/statistics/Country';
import PrivateRoute from './components/security/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import './App.css';


export const baseUrlContext = createContext()

function App() {

  console.log('En el home')
  return (
    <div className="App">
      <CountryProvider>
        <Switch>
          <PrivateRoute path="/" endpoint="/statistics/continents" exact component={Home} />
          <PrivateRoute path="/statistics/:id" endpoint="/statistics/:id" exact component={Country} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </CountryProvider>
    </div>
  );
}

export default App;
