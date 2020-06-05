import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'

class Catalog extends Component {
    render() {
        return (
            <div>
                <Jumbotron  title="Каталог" subtitle=""/>
                <div className="container">

                    <h2>Welcome to Book Store</h2>
                    <p>каталог книг</p>
                </div>
                
            </div>
        )
    }
}

export default Catalog;