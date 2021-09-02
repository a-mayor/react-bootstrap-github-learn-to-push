import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Post from './components/Post'
import Signup from './components/Signup'
import Header from './components/Header'
import Personal from './components/Projects/Personal'
import School from './components/Projects/School'
import Business from './components/Projects/Business'
import Advanced from './components/Projects/Advanced'
import Footer from './components/Footer'
function App() {
  return (
 <BrowserRouter>
 <Header />
 <Switch>
   <Route component={Home} path='/' exact />
   <Route component={About} path='/about' />
   <Route component={Login} path='/login' />
   <Route component={Post} path='/post' />
   <Route component={Signup} path='/signup' />
   <Route component={Personal} path='/personal' />
   <Route component={School} path='/school' />
   <Route component={Business} path='/business' />
   <Route component={Advanced} path='/advanced' />
 </Switch>
 <Footer />
 </BrowserRouter>
  );
}

export default App;
