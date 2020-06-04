import React from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

function Proza() {
        return (
            <div>
                <Navbar />
                <Jumbotron  title="Проза" subtitle=""/>
                <div className="container">

                    <h2>Welcome to Book Store</h2>
                </div>
                
            </div>
        )
    
}

export default Proza;
