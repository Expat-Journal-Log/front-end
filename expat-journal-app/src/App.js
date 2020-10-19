import React from 'react';
import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import Header from './components/Header';
import PostForm from './components/PostForm';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <h1>Expat Journal</h1>
   <h2>Login</h2> */}
				<Header />

				<Route exact path='/posts'>
					<Posts />
				</Route>

				<Route exact path='/create-post'>
					<PostForm />
				</Route>

				<Route exact path='/register'>
					<Register />
				</Route>

				<Route exact path='/'>
					<Login />
				</Route>
			</div>
		</Router>
	);
}

export default App;
