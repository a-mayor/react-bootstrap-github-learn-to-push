import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Post from './components/Post'
import Project from './components/Project'
import Signup from './components/Signup'
import Header from './components/Header'
function App() {
  return (
 <BrowserRouter>
 <Header />
 <Switch>
   <Route component={Home} path='/' exact />
   <Route component={About} path='/about' />
   <Route component={Login} path='/login' />
   <Route component={Post} path='/post' />
   <Route component={Project} path='/project' />
   <Route component={Signup} path='/signup' />

 </Switch>
 </BrowserRouter>
  );
}

export default App;
