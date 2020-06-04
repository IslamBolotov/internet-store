import React from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

function Thriller() {
        return (
            <div>
                <Navbar />
                <Jumbotron  title="Триллеры" subtitle=""/>
                <div className="container">

                    <h2>Welcome to Book Store</h2>
                </div>
                
            </div>
        )
    
}

export default Thriller;
