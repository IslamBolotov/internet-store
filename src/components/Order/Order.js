import React, { Component } from 'react';
import InputMask from 'react-input-mask'
import axios from 'axios';
import  './luck.gif'

class Order extends Component {

  state ={
    data:[],
    customerName:'',
    adress:'',
    phoneNumber:'',
    comment:'',
    status:true
  }

  componentDidMount = async () =>{
    const { data } = await axios.get(`http://localhost:8000/basket`);
    this.setState({ data })
  }

  handleOrder = async () =>{
    if(this.state.data && this.state.customerName && this.state.adress && this.state.phoneNumber && this.state.comment){
        await axios.post('http://localhost:8000/order',this.state)
        this.handleDeleteAll();
    }
  }

  handleDeleteAll = async () => {
    this.state.data.map( async (item,index,data)=>{
        await axios.delete(`http://localhost:8000/basket/${data[index].id}`,)
    })
    this.setState({ data: null,
        customerName:'',
        adress:'',
        phoneNumber:'',
        comment:'',
        status: false
    })


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

  render() {
    return this.state.status ? (
      <div style={{marginLeft:"50px"}}>
        <div style={{marginRight:"50px"}}>
                <label>ФИО</label><br></br>
                <input style={{width:"350px"}} value={this.state.customerName} onChange={(e) => this.handleChangeCustomerName(e)} placeholder="Болотов Ислам"></input><br></br>
                <label>Адрес</label><br></br>
                <input style={{width:"350px"}} value={this.state.adress}  onChange={(e) => this.handleChangeAdress(e)} placeholder=""></input><br></br>
                <label>Телефон</label><br></br> 
                <InputMask value={this.state.phoneNumber} onChange={(e) => this.handleChangePhoneNumber(e)}
                    style={{width:"350px"}}
                    mask="+(999)-999-99-99-99"
                    type="text" 
                    placeholder="Phone Number" >
                </InputMask><br></br>
                <label>Коментарий</label><br></br>
                <textarea value={this.state.comment} onChange={(e) => this.handleChangeComment(e)} type="textarea" style={{width:"350px"}}></textarea><br></br>
                <button onClick={this.handleOrder} >Заказать</button>
            </div>   
        </div>               
    ): (
      <>
      <img src='https://yraaa.ru/_pu/19/86784775.gif'></img>
      <h1 style={{marginLeft:"130px"}}>Заказ успешно отправлен</h1>
      </>
    )
  }
}

export default Order;