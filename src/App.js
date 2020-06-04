import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'
import Pricklucheniya from './Janres/Prickluch'
import Proza from './Janres/Proza'
import Poeziya from './Janres/Poeziya'
import Fantasy from './Janres/Fantasy'
import Romans from './Janres/Romans';
import Humor from './Janres/Humor';
import Fantastic from './Janres/Fantastic';
import Forchild from './Janres/Forchild';
import Detective from './Janres/Detective';
import Religions from './Janres/Religions';
import Drams from './Janres/Drams';
import Horrors from './Janres/Horrors';
import Myths from './Janres/Myths';
import Thriller from './Janres/Thriller';
import Biography from './Janres/Biography';
import Basket from './pages/Basket';








function App() {
  return (
 <BrowserRouter>
  <div>
    <Route exact path="/" component = {Home} />
    <Route path="/about" component = {About} />
    <Route path="/contact" component = {Contact} />
    <Route path="/basket" component = {Basket} />
    <Route path="/catalog" component = {Catalog} />
    <Route path="/priklyucheniya" component = {Pricklucheniya} />
    <Route path="/proza" component = {Proza} />
    <Route path="/poeziya" component = {Poeziya} />
    <Route path="/fantasy" component = {Fantasy} />
    <Route path="/romans" component = {Romans} />
    <Route path="/humor" component = {Humor} />
    <Route path="/fantastic" component = {Fantastic} />
    <Route path="/forchild" component = {Forchild} />
    <Route path="/detective" component = {Detective} />
    <Route path="/religions" component = {Religions} />
    <Route path="/drams" component = {Drams} />
    <Route path="/horrors" component = {Horrors} />
    <Route path="/myths" component = {Myths} />
    <Route path="/thriller" component = {Thriller} />
    <Route path="/biography" component = {Biography} />



    
   

    

  </div>
 
 
 </BrowserRouter>
  );
}

export default App;


