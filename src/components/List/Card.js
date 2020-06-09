import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


class Card extends React.Component{
    state = {
        status: false
    }

    componentDidMount= async ()=>{
        const { contact } = this.props
        const { data } =   await axios.get('http://localhost:8000/basket')
        data.map(item =>{
            
            if(item.id == contact.id){
                // console.log(item);
                this.setState({ status : true})
                
            }
        })
    }

    handleAddBasket = async (id,contact) =>{
        const newData = {...contact}
        newData.quantity = 1;
        newData.status = true;
        await axios.post('http://localhost:8000/basket',newData)
        this.setState( { status:true })
    }


   
    
    render(){

    

            const { contact } = this.props;
            switch (contact.genre) {
                case 'proza': var newGenre = 'Проза' ;  break;
                case 'priklyucheniya': var newGenre = 'Приключения' ;  break;
                case 'poeziya': var newGenre = 'Поэзия' ;  break;
                case 'fantasy': var newGenre = 'Фэнтези' ;  break;
                case 'romans': var newGenre = 'Любовный роман' ;  break;
                case 'humor': var newGenre = 'Юмор' ;  break;
                case 'fantastic': var newGenre = 'Научная фантастика' ;  break;
                case 'forchild': var newGenre = 'Детское' ;  break;
                case 'detective': var newGenre = 'Детектив' ;  break;
                case 'drams': var newGenre = 'Драма' ;  break;
                case 'horrors': var newGenre = 'Ужасы и мистика' ;  break;
                case 'religions': var  newGenre = 'Религия и духовность' ;  break;
                case 'thriller': var newGenre = 'Триллер' ;  break;
                case 'myths': var newGenre = 'Мифы и легенды' ;  break;
                case 'biography': var newGenre = 'Биография и мемуары' ;  break;
            
                default:
                    break;
            }

            const a = contact.language.toLowerCase()
            
            
            switch (a) {
                case "rus": var lang = 'Русский'; break;
                case "eng": var lang = 'Английский(English)'; break;
                case "kg": var lang = 'Кыргызский(Кыргызча)'; break;
            
            
                default:
                    break;
            }
            
        return(
            <li className='contact'>
                <div className="photo-block" style={{backgroundImage:`url(${contact.photo})`}}>
                </div>
                <div>
                    <h6>Название: {contact.name}</h6>
                    <h6>Автор: {contact.author}</h6>
                    <h6>Стоимость: {contact.money} сом</h6>
                    <h6>Жанр: {newGenre}</h6>
                    <h6>Язык: {lang}</h6>
                </div>
                    <button className="basket-btn" style={this.state.status ? {display:"none"}: {display:"block"} } onClick={()=> this.handleAddBasket(contact.id, contact)}>Добавить в корзину</button>
                    <button className="basket-"  style={this.state.status ? {display:"block"}: {display:"none"} }><Link to="/basket" >Перейти в Корзину</Link></button>
                    <button className="podrob-btn"><Link to={`/product/${this.props.contact.id}`}>Подробнее</Link></button>
            </li>
        );      
    }   
}

export default Card;