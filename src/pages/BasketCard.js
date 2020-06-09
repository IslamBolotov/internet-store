import React, { Component } from 'react';
import axios from 'axios'

class BasketCard extends Component {

  state= {
    contact: null,
    currentVal: 1,
    onModal: true
  }

  handleChange= async (e,contact)=>{
    const { update } = this.props;
    if(e.target.value>0){
      const newData = {...contact}
      newData.quantity = e.target.value
      await axios.put(`http://localhost:8000/basket/${contact.id}`,newData)
      this.setState({ contact:newData})
    }
    update();
  }

  handleDeleteOrder = async () => {
    // this.setState({ onModal : false})
    const { contact } = this.state;
    await axios.delete(`http://localhost:8000/basket/${contact.id}`) 
    this.setState({ contact: null})
  }

  componentDidMount(){
    const { contact } = this.props;
    this.setState({ contact });
  }

  componentDidUpdate(prevProps){
      if(JSON.stringify(prevProps) === JSON.stringify(this.props)) return;
      const { contact } = this.props;
      this.setState({ contact });
  }


  

  render() {

      const { contact } = this.state
      

    return contact ? (
      <>
        <tr>
          <td>{contact.id}</td>
          <td>{contact.name}</td>
          <td>{contact.money}</td>
          <td><input className="quantity-of-books" type="number" value={contact.quantity} onChange={(event)=>this.handleChange(event,contact)}></input></td>
          <td>{contact.quantity*contact.money}</td>
          <td><button onClick={this.handleDeleteOrder}>Удалить</button></td>
        </tr>
      </>
    ) : null;
  }
}

export default BasketCard;