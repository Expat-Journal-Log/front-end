import React from 'react';
import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
   {/* <h1>Expat Journal</h1>
   <h2>Login</h2> */}
    <Header />
    <Route exact path='/posts'>
    
    <Posts /> 
    </Route>

    <Route exact path='/'>
    
    <Login /> 
    </Route>

   


    </div>
    </Router>
  );
}

export default App;
