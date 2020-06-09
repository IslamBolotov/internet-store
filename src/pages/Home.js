import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Carousel } from 'react-bootstrap'
import '../App.css'



class Home extends Component {
    render() {
        return (
            <div className="homes">
                {/* <Jumbotron title="Добро Пожаловать" subtitle="Тому, кто читает книги, никогда не скучно." /> */}
                <div className="container">

                    <h2 className="home">Welcome to Book Store</h2>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.waterstones.com/images/00155009-1366x379.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.waterstones.com/images/00154744-1366x379.jpeg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdn.waterstones.com/images/00155307-1366x379.jpeg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                               
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home;