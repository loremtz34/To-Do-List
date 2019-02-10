import React from 'react';

const Task =(props)=>{
    return(
        <div>
            <p>{props.item}</p>
            <p>Maria</p>
            <button onClick={props.openModal}>Edit</button>
            <button>Open</button>
        </div>
    )
} 
export default Task;