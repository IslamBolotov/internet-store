import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

class Example extends Component {


  state ={
      name:'',
      money:null,
      photo:'',
      genre:'',
      description:'',
      author:'',
      language:''
  }

  handleAdd = async () => {
    switch (this.state.genre) {
      case 'Проза': var newGenre = 'proza' ;  break;
      case 'Приключения': var newGenre = 'priklyucheniya' ;  break;
      case 'Поэзия': var newGenre = 'poeziya' ;  break;
      case 'Фэнтези': var newGenre = 'fantasy' ;  break;
      case 'Любовный роман': var newGenre = 'romans' ;  break;
      case 'Юмор': var newGenre = 'humor' ;  break;
      case 'Научная фантастика': var newGenre = 'fantastic' ;  break;
      case 'Детское': var newGenre = 'forchild' ;  break;
      case 'Детектив': var newGenre = 'detective' ;  break;
      case 'Драма': var newGenre = 'drams' ;  break;
      case 'Ужасы и мистика': var newGenre = 'horrors' ;  break;
      case 'Религия и духовность': var  newGenre = 'religions' ;  break;
      case 'Триллер': var newGenre = 'thriller' ;  break;
      case 'Мифы и легенды': var newGenre = 'myths' ;  break;
      case 'Биография и мемуары': var newGenre = 'biography' ;  break;
  
      default:
          break;
    }

    const newData = this.state;
    newData.genre = newGenre

      await axios.post('http://localhost:8000/books',newData)
      this.setState({ 
        name:'',
        money:0,
        photo:'',
        genre:'',
        description:'',
        author:'',
        language:''
        })
  }

    handleChangeName =(event) =>{
      this.setState({name: event.target.value})    
    }
    
    handleChangeMoney =(event) =>{
      if(event.target.value >0){
        this.setState({money: event.target.value})    
      }
    }

    handleChangePhoto =(event) =>{
        this.setState({photo: event.target.value})    
    }

    handleChangeGenre =(event) =>{
      
      this.setState({genre: event.target.value})    
    }

    handleChangeDescription =(event) =>{
      this.setState({description: event.target.value})    
    }

    handleChangeAuthor =(event) =>{
      this.setState({author: event.target.value})    
    }

    handleChangeLanguage =(event) =>{
      this.setState({language: event.target.value})    
    }

  render(){
    return (
      <div className="form-add">
        <Form className="form">
           <FormGroup>
            <Label for="">Названия книга</Label>
            <Input value={this.state.name} onChange={(e) => this.handleChangeName(e)} type="text" name="text" id="exampleEmail" placeholder="Названия книга"/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Автор книги</Label>
            <Input value={this.state.author} onChange={(e) => this.handleChangeAuthor(e)} type="text" name="text" id="examplePassword" placeholder="Автор" />
          </FormGroup> 
          <FormGroup>
            <Label for="examplePassword">Стоимость</Label>
            <Input value={this.state.money} onChange={(e) => this.handleChangeMoney(e)} type="number" name="number" id="examplePassword" placeholder="" />
          </FormGroup> 
          <FormGroup>
            <Label for="exampleSelect">Жанр</Label>
            <Input value={this.state.genre} onChange={(e) => this.handleChangeGenre(e)} type="select" name="select" id="exampleSelect">
              <option>Проза</option>
              <option>Приключения</option>
              <option>Поэзия</option>
              <option>Фэнтези</option>
              <option>Любовный роман</option>
              <option>Юмор</option>
              <option>Научная фантастика</option>
              <option>Детское</option>
              <option>Детектив</option>
              <option>Драма</option>
              <option>Ужасы и мистика</option>
              <option>Религия и духовность</option>
              <option>Триллер</option>
              <option>Мифы и легенды</option>
              <option>Биография и мемуары</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Выберите язык</Label>
            <Input value={this.state.language} onChange={(e) => this.handleChangeLanguage(e)}  type="select" name="select" id="exampleSelectMulti">
              <option>ENG</option>
              <option>RUS</option>
              <option>KG</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Описание книги</Label>
            <Input value={this.state.description} onChange={(e) => this.handleChangeDescription(e)} type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Фото</Label>
            <Input value={this.state.photo} onChange={(e) => this.handleChangePhoto(e)} type="text" name="text" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <Button onClick={this.handleAdd}>Добавить</Button>
        </Form>
      </div>
    );
  }
}

export default Example;


// axios.get('localhost:8000', {
//   params: {
//     releaseDate: '2020'
//   }
// })
