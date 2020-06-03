import React from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

function Poeziya() {
        return (
            <div>
                <Navbar />
                <Jumbotron  title="Поэзия" subtitle=""/>
                <div className="container">

                    <h2>Welcome to Book Store</h2>
                </div>
                
            </div>
        )
    
}

export default Poeziya;
