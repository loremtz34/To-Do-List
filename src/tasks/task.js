import React from 'react';

const Task =(props)=>{
    return(
        <div>
            <p>{props.item.task}</p>
            <p>{props.item.user? props.data_user.map((item)=> {
                if(props.item.user === item.id){
                    
                    
                    return item.name;
                }
                return ""
                }
            ) : "No asignado" }</p>
            <button onClick={() => props.openModal(props.item.id)}>Edit</button>
            <button>Open</button>
        </div>
    )
} 
export default Task;