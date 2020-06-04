import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

class Contact extends Component {
    render() {
        return (
            <div>
                <Jumbotron  title="Контакты" subtitle=""/>
                <div className="container">

                    <h2>Наши контакты</h2>
                </div>
            </div>
        )
    }
}

export default Contact;