import React from 'react';
import Card from './Card';


function List(props){
    return(
        <ul>
            {props.data.map((task,index) => (
                <Card 
                    key = {task.id}
                    name = {.name}
                    status = {task.status}
                    onDelete = {()=> props.onDelete(task.id)}
                    onChange = {()=> props.onChange(index)}
                />
            ))}
        </ul>
    )
}

export default List;