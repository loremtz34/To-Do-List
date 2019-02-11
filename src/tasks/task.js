import React from 'react';

const Task =(props)=>{
    return(
        <div>
            <p>{props.item.task}</p>
            <p>Maria</p>
            <button onClick={() => props.openModal(props.item.id)}>Edit</button>
            <button>Open</button>
        </div>
    )
} 
export default Task;