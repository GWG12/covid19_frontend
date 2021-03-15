//import OperationNavBar from './Operations/NavBar/NavBar';
//import MainScreen from './MainScreen';
import { createContext } from "react"
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import './App.css';


export const baseUrlContext = createContext()

function App() {


  return (
    <div className="App">
      <baseUrlContext.Provider value={'http://localhost:5000'}>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </baseUrlContext.Provider>
    </div>
  );
}

export default App;
