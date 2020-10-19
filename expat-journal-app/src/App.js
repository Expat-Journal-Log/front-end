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

    <Route exact path='/posts'>
    <Header />
    <Posts /> 
    </Route>

    <Route exact path='/'>
    <Header />
    <Login /> 
    </Route>

   


    </div>
    </Router>
  );
}

export default App;
