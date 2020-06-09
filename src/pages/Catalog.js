
import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'

class Contact extends Component {


    render() {
        return (
            <div>
            
                <Jumbotron  title="Контакты" subtitle=""/>
                <div className="container" style={{marginTop:50+'px'}}>

                    <h2>Наши контакты</h2>
                    <div style={{marginTop: 40+'px'}}>
                        <h2>Город Бишкек, Кыргызстан</h2>
                        <h3>Проспект Мира, ТЦ "Asia Mall"</h3>

                    </div>
                    <div style = {{marginTop: 30+'px'}}>
                    <h2>Мы на Goggle maps</h2> 
                    <iframe style={{border: 0+'px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.4047389356472!2d74.58557686681485!3d42.85575592745793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2z0JDQt9C40Y8g0JzQvtC70Ls!5e0!3m2!1sru!2skg!4v1568104700489!5m2!1sru!2skg" width="800" height="450" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;

