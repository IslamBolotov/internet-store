import React from 'react';

import './App.css';
import  Router  from './Router';

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
import AddBook from './components/AddBook/AddBook';








function App() {
  return (

 <BrowserRouter>

    
    

  <div>
      
      <Router />
    </div>
 </BrowserRouter>
  )
}

export default App;


