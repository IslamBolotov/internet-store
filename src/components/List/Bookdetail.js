import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'



class BookDetail extends Component {

    state = {
        listOfBooks: {
            id: null,
            name: ''
        }
    }
    componentDidMount = async () => {
        const { data } = await axios.get('http://localhost:8000/books')
        // console.log(data)
        const id = this.props.match.params.id;
        console.log(this.props)
        const listOfBooks = data.filter(a => (a.id === +id))[0]


        console.log(this.props)
        this.setState({
            listOfBooks
        })
    }




    render() {
        switch (this.state.listOfBooks.genre) {
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

        const a = this.state.listOfBooks.language
        console.log(a)
        
        
        switch (a) {
            case "RUS": var lang = 'Русский'; break;
            case "ENG": var lang = 'Английский(English)'; break;
            case "KG": var lang = 'Кыргызский(Кыргызча)'; break;
        
        
            default:
                break;
        }
        
        // console.log(this.state)

        return (
            <div className='container'>
                <div className="img" style={{ backgroundImage: `url(${this.state.listOfBooks.photo})` }}>
                </div>
                <div className='bookdetails'>
                    <h6>Название: {this.state.listOfBooks.name}</h6>
                    <h6>Автор: {this.state.listOfBooks.author}</h6>
                    <h6>Стоимость: {this.state.listOfBooks.money} сом</h6>
                    <h6>Жанр: {newGenre}</h6>
                    <h6>Описание: {this.state.listOfBooks.description}</h6>
                    <h6>Язык: {lang}</h6>

                </div>
            </div>

        )
    }
}
export default BookDetail;
