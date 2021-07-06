import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';


import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Example from './components/AddBook/AddBook';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Catalog from './pages/Catalog'
import List from './components/List/List'
import Navbar from './components/Navbar'
import Basket from './pages/Basket'

import BookDetail from './components/List/Bookdetail';

import Order from './components/Order/Order';


const Router = () =>{
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
            <Route exact path="/" component = {Home} />

            <Route path="/product/:id" component={BookDetail} />

            <Route path="/admin"  component = {Example} />
            <Route path="/order" component={Order} />

            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route path="/basket" component = {Basket} />
            <Route path="/product" component = {BookDetail} />
            {/* <Route path="/catalog" component = {Catalog} /> */}
            <Route path="/all" component={()=><List add={'all'}/>} />
            <Route path="/proza" component={()=><List add={'proza'}/>}/>
            <Route path="/priklyucheniya" component={()=><List add={'priklyucheniya'}/>}/>
            <Route path="/poeziya" component={()=><List add={'poeziya'}/>}/>
            <Route path="/fantasy" component={()=><List add={'fantasy'}/>}/>
            <Route path="/romans" component={()=><List add={'romans'}/>} />
            <Route path="/humor" component={()=><List add={'humor'}/>}/>
            <Route path="/fantastic" component={()=><List add={'fantastic'}/>} />
            <Route path="/forchild" component={()=><List add={'forchild'}/>}/>
            <Route path="/detective" component={()=><List add={'detective'}/>} />
            <Route path="/religions" component={()=><List add={'religions'}/>} />
            <Route path="/drams" component={()=><List add={'drams'}/>}/>
            <Route path="/horrors" component={()=><List add={'horrors'}/>} />
            <Route path="/myths" component={()=><List add={'myths'}/>}/>
            <Route path="/thriller" component={()=><List add={'thriller'}/>} />
            <Route path="/biography" component={()=><List add={'biography'}/>} />

            </Switch>

            

            <Footer />
        </BrowserRouter>
    )
}

export default Router;