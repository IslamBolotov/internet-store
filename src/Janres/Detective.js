import React from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer/Footer'
import Router from '../Router'

function Detective() {
        return (
            <div>
                <Navbar />
                
                <Jumbotron  title="Детектив" subtitle=""/>
                <div className="container">

                    <h2>Welcome to Book Store</h2>
                </div>
                {/* <Router /> */}
                
            </div>
        )
    
}

export default Detective;
