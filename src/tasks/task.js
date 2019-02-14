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
            ) : "Not asigned" }</p>
            <p>{props.handleState(props.item.status)}</p>
            <button onClick={() => props.openModal(props.item.id)}>Edit</button>
        </div>
    )
} 
export default Task;