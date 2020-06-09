import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import { Carousel } from 'react-bootstrap'
import '../App.css'
import axios from 'axios';
import HomeCard from './HomeCard'
import Card from '../components/List/Card'



class Home extends Component {

    state = {
        data:[],
        data2:[]
    }

    componentDidMount = async ()=>{
        const { data } = await axios.get(`http://localhost:8000/books?_sort=year&_order=desc`)
        const newData = data.slice(0,5)
        this.setState({ data: newData })

        const  dataNew  = await axios.get(`http://localhost:8000/books?_sort=rating&_order=desc`)
        const newData2 = dataNew.data.slice(0,5)
        this.setState({ data2: newData2 })
        
      
    }
   
    render() {
        return (
            <div className="homes">
                {/* <Jumbotron title="Добро Пожаловать" subtitle="Тому, кто читает книги, никогда не скучно." /> */}
                <div className="container">
                    <h1 style={{paddingBottom:"50px"}}>Новинки</h1>
                <ul className="listing-home"> 
                    {this.state.data.map(contact =>(
                            <HomeCard contact={contact}/>
                    ))}
                </ul>

                <h1 style={{marginTop:"100px"}}>Популярные книги</h1>
                <ul className="listing-home"> 
                    {this.state.data2.map(contact =>(
                            <HomeCard contact={contact}/>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}

export default Home;