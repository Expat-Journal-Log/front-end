import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import Login from './components/Login';
import Posts from './components/Posts';
import Header from './components/Header';
import PostForm from './components/PostForm';
>>>>>>> 2dfdecd44fb6029fa351a26a52346153c183b6df
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
<<<<<<< HEAD
	return (
		<Router>
			<div className='App'>
				<Route exact path='/'>
					{/* <Login />  */}
					<Register />
				</Route>
			</div>
		</Router>
	);
=======


  return (
    <Router>
    <div className="App">
   {/* <h1>Expat Journal</h1>
   <h2>Login</h2> */}
    <Header />

    <Route exact path='/posts'>
    <Posts /> 
    </Route>

    <Route exact path='/create-post'>
    <PostForm /> 
    </Route>

    <Route exact path='/'>
    <Login /> 
    </Route>

    </div>
    </Router>
  );
>>>>>>> 2dfdecd44fb6029fa351a26a52346153c183b6df
}

export default App;
