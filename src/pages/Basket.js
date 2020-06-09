import React, { Component } from 'react';
import axios from 'axios'
import BasketCard from './BasketCard';

class Basket extends Component {
    state = {
        data:[

        ],
        sum:0
    }

    componentDidMount = async () =>{
        const { data } = await axios.get(`http://localhost:8000/basket`)
        
        this.setState({ data })
        this.handleSumOfBooks()
        
    }

    

    handleSumOfBooks = () =>{
        let sum = 0;
        this.state.data.map(item =>{
            sum+=item.money*item.quantity
        })
        this.setState({ sum })
    }   

    componentDidUpdate = () => {
    }


    render() {
        return (
            <table className="table-basket">
                <thead>
                    <tr>
                        <th>Фото</th>
                        <th>Названия</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Стоимость</th>
                        <th>Удаление</th>
                    </tr>

                </thead>
                <tbody>
                    {this.state.data.map((contact) => (
                            <BasketCard
                            key = {contact.id}
                            contact = {contact}
                            update = {this.handleSumOfBooks}
                            />
                    ))}
                </tbody>
                <h4>{this.state.sum}</h4>
            </table>
        );
    }
}

export default Basket;


