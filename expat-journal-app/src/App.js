import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Posts from './components/Posts';
import Post from './components/Post';
import Header from './components/Header';
import PostForm from './components/PostForm';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextObject } from './context/context';

// import axiosWithAuth from './utils/axiosWithAuth';

const initialState = {
  posts: [{title: 'test', id: 1, body: 'hello world', created_at: Date.now(), img_url: ''}],
  error: ''
};

function App() {
  const [posts, setPosts] = useState(initialState.posts);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/posts`)
  //     .then(res => {
  //       console.log('App: useEffect: DT: ', res);

  //       setPosts(res.data);
  //     })
  //     .catch(err => console.error('App: useEffect: DT: Error: ', err));
  // }, []);

  return (
    <Router>
      <ContextObject.Provider value={{initialState}}>
        <div className="App">
          {/* <h1>Expat Journal</h1>
          <h2>Login</h2> */}
            <Header />

            <Route exact path='/posts'>
            <Posts /> 
            </Route>

            {/* <Route exact path='/post'>
              <Post />
            </Route> */}

            <Route exact path='/create-post'>
            <PostForm /> 
            </Route>

            <Route exact path='/'>
            <Login /> 
            </Route>
            <Route exact path='/register'>
            <Register /> 
            </Route>
        </div>
      </ContextObject.Provider>
    </Router>
  );
}

export default App;