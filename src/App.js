import React from 'react';
import Navbar from './Comps/Navbar';
import './App.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Services from './Comps/Services';
import Products from './Comps/Products';
import Signup from './Comps/Signup';
import Home from './Comps/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/sign-up" exact component={Signup}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
