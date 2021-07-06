import React, { Component } from 'react';
import axios from 'axios'
import BasketCard from './BasketCard';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask'
import Order from '../components/Order/Order';

class Basket extends Component {
    state = {
        data: [],
        sum:0,
        status: false
    }

    

    handleOrder = async () =>{
        if(this.state.data && this.state.customerName && this.state.adress && this.state.phoneNumber && this.state.comment){
            console.log(this.state);
            await axios.post('http://localhost:8000/order',this.state)
            
            this.handleDeleteAll();
        }
    }

    handleChangeCustomerName =(event) =>{
        this.setState({customerName: event.target.value})    
    }

    handleChangeAdress =(event) =>{
        this.setState({adress: event.target.value})    
    }

    handleChangePhoneNumber =(event) =>{
        this.setState({phoneNumber: event.target.value})    
    }

    handleChangeComment =(event) =>{
        this.setState({comment: event.target.value})    

    }

    componentDidMount = async () =>{
        const { data } = await axios.get(`http://localhost:8000/basket`)
        if(data.length === 0) {
            return this.setState({status:false}) 
        }  
        this.setState({ data , status: true})
        
        this.handleSumOfBooks()
        
    }

    handleDeleteAll = async () => {
        this.state.data.map( async (item,index,data)=>{
            await axios.delete(`http://localhost:8000/basket/${data[index].id}`,)
        })
        this.setState({ data: null, status: false})
    }

    handleSumOfBooks = () =>{
        let sum = 0;
        this.state.data.map(item =>{
            sum+=item.money*item.quantity
        })
        this.setState({ sum })
    }   


    render() {
        console.log(this.state.data);
        
        return this.state.status ? (
        <div className="basket-block">

            <table className="table-basket">
                <thead>
                    <tr>
                        <th>№</th>
                        <th style={{padding:"5px"}}>Названия</th>
                        <th>Цена</th>
                        <th style={{textAlign:"center"}}>Количество</th>
                        <th style={{textAlign:"right"}}>Стоимость</th>
                        <th style={{textAlign:"center"}}>Удаление</th>
                    </tr>

                </thead>
                <tbody>
                    {this.state.data.map((contact,index) => (
                            <BasketCard
                            key = {contact.id}
                            contact = {contact}
                            update = {this.componentDidMount}
                            index = {index}
                            />
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button><Link to="/order">Оформить заказ</Link></button></td>
                        <td><button onClick={this.handleDeleteAll}>Очистить все</button></td>
                        <td>
                            <h5 style={
                            {textAlign:"center",
                            backgroundColor:"lightgreen",
                            padding:"10px",
                            borderRadius:"3px"
                            }}>Сумма:  {this.state.sum}сом
                            </h5>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        ) : (<h1 style={{textAlign:"center"}}>Корзина пусто</h1>) 
    }
}

export default Basket;


