import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


const Router = () =>{
    return(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
}

export default Router;