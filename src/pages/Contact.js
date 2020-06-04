import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Map from '../map'

class Contact extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron  title="Контакты" subtitle=""/>
                <div className="container">

                    <h2>Наши контакты</h2>
                    <Map />
                </div>
            </div>
        )
    }
}

export default Contact;