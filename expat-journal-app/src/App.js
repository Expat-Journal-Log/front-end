import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
    <div className="App">
   {/* <h1>Expat Journal</h1>
   <h2>Login</h2> */}

    <Route exact path='/'>
    <Login /> 
    </Route>
    </div>
    </Router>
  );
}

export default App;
