import React from 'react';
import {Button, Card} from 'react-bootstrap';

const Task =(props)=>{
    return(
        <Card style={{width:'80%'}}>
            <h5 style={{margin:10}}>{props.item.task}</h5>
            <h6 style={{margin:10}}>{props.item.user? props.data_user.map((item)=> {
                if(props.item.user === item.id){
                    
                    
                    return item.name;
                }
                return ""
                }
            ) : "Not asigned" }</h6>
            <h6 style={{margin:10}}>{props.handleState(props.item.status)}</h6>
            <Button  style={{margin:10}} variant="warning" onClick={() => props.openModal(props.item.id)}>Edit</Button>
        </Card>
    )
} 
export default Task;