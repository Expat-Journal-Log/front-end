import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
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
}

export default App;
