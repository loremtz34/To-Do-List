import React from 'react';
import {Card} from 'react-bootstrap';

const User =(props)=>{
    return(
        <Card style={{width:'80%'}}>
            <p>{props.item.name}</p>
        </Card>
    )
} 
export default User;