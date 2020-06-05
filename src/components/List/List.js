import React from 'react';
import Card from './Card';
import axios from 'axios'


class List extends React.Component{
    state ={
        data:[]
    }



    componentDidMount = async () => {
        const { data } = await axios.get('http://localhost:8000/books')
        if(JSON.stringify(this.state) === JSON.stringify({ data })) return;
        var newData=[]
        data.map(item =>{
            if(this.props.add === 'all'){
                this.setState({ data });
                return
            }
            else if(item.genre === this.props.add){
                newData.push(item)
                this.setState({ data :newData })

            }
          
        })
        
    }

  
    
    

  

    render(){
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