import React from 'react';

const Task =(props)=>{
    return(
        <div>
            <p>{props.item}</p>
            <p>Maria</p>
            <button>Edit</button>
            <button>Open</button>
        </div>
    )
} 
export default Task;