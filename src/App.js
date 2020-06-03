import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'
import Hudlitr from './pages/Hudlitr'



function App() {
  return (
 <BrowserRouter>
  <div>
    <Route exact path="/" component = {Home} />
    <Route path="/about" component = {About} />
    <Route path="/contact" component = {Contact} />
    <Route path="/catalog" component = {Catalog} />
    <Route path="/hudlitr" component = {Hudlitr} />



  </div>
 
 
 </BrowserRouter>
  );
}

export default App;
