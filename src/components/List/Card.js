import React from 'react';


class Card extends React.Component{
    
    
    render(){

            const { contact } = this.props;
            
            
        return(
            <li className='contact'>
                <h6>Названия: {contact.name}</h6>
                <h6>Автор: {contact.author}</h6>
                <h6>Стоимость: {contact.money} сом</h6>
                <h6>Жанр: {contact.genre}</h6>
                <h6>Язык: {contact.language}</h6>
                <div className="photo-block" style={{backgroundImage:`url(${contact.photo})`}}>
                    
                </div>
            </li>
        );      
    }   
}

export default Card;