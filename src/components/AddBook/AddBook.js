import React, {Component} from 'react';
import axios from 'axios'   

class AddBook extends Component{
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
        await axios.post('http://localhost:8000/books',this.state)
        this.setState({ 
          name:'',
          money:null,
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
        this.setState({money: event.target.value})    
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
        return(
            <div className="add-task">
                <label>Имя</label>
                <input value={this.state.name} onChange={(e) => this.handleChangeName(e)}></input>
                <label>money</label>
                <input type={'number'} value={this.state.money} onChange={(e) => this.handleChangeMoney(e)}></input>
                <label>фото</label>
                <input value={this.state.photo} onChange={(e) => this.handleChangePhoto(e)}></input>
                <label>genre</label>
                <input value={'proza'} onChange={(e) => this.handleChangeGenre(e)}></input>
                <label>description</label>
                <input value={this.state.description} onChange={(e) => this.handleChangeDescription(e)}></input>
                <label>автор</label>
                <input value={this.state.author} onChange={(e) => this.handleChangeAuthor(e)}></input>
                <label>язык</label>
                <input value={'RUS'} onChange={(e) => this.handleChangeLanguage(e)}></input>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }

}

export default AddBook;