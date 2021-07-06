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
    const { update } = this.props;
    await axios.delete(`http://localhost:8000/basket/${contact.id}`) 
    this.setState({ contact: null})
    update();
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
        <tr className="table-row">
          <td>{this.props.index+1}</td>
          <td>{contact.name}</td>
          <td>{contact.money}</td>
          <td style={{textAlign:"center"}}><input className="quantity-of-books" type="number" value={contact.quantity} onChange={(event)=>this.handleChange(event,contact)}></input></td>
          <td style={{textAlign:"right"}}>{contact.quantity*contact.money}</td>
          <td style={{textAlign:"center"}}><button className="btn-delete" onClick={this.handleDeleteOrder}><img alt="" src="https://image.flaticon.com/icons/png/512/70/70757.png" style={{width:"30px"}} ></img></button></td>
        </tr>
      </>
    ) : null;
  }
}

export default BasketCard;