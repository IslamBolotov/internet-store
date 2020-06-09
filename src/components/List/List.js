import React from 'react';
import Card from './Card';
import axios from 'axios'
import BookDetail from './Bookdetail';
import {Route, Switch} from 'react-router-dom'


class List extends React.Component{
    state ={
        data:[]
    }



    componentDidMount = async () => {
        const { data } = await axios.get('http://localhost:8000/books')
        const  data2  = await axios.get('http://localhost:8000/books?_start=0&_limit=10')
        if(JSON.stringify(this.state) === JSON.stringify({ data })) return;
        var newData=[]
        data.map(item =>{
            if(this.props.add === 'all'){
                this.setState({ data: data2.data });
                return
            }
            else if(item.genre === this.props.add){
                item.status = false;
                newData.push(item)
                this.setState({ data :newData })

            }
          
        })
        
    }


    render(){

        // console.log(this.state.data)


        return( 
            <>  
                
                
                <ul className="listing">
                
                    {this.state.data.map((contact) => (
                        <Card 
                            key = {contact.id}
                            contact = {contact}
                        />
                        ))}
                        
                </ul>
            
            </>
        )
    }
}

export default List;