import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron  title="О Компании" subtitle=""/>
                <div className="container">

                    <h2>Инофрмация о нас</h2>
                </div>
            </div>
        )
    }
}

export default About;