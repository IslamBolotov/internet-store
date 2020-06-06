import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Carousel } from 'react-bootstrap'


class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron title="Добро Пожаловать" subtitle="Тому, кто читает книги, никогда не скучно." />
                <div className="container">

                    <h2>Welcome to Book Store</h2>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.mirf.ru/wp-content/uploads/2019/05/oblozhki.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://r5.readrate.com/img/pictures/basic/819/819105/8191057/w585h345-crop-stretch-491dde73.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://bhub.com.ua/wp-content/uploads/2019/05/kn_00-1024x683.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home;