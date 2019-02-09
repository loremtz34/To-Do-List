import React from 'react';
import Task from './task'

const List =(props)=>{
    return(
        <div>
            {props.data.map((item) =>{
                return <Task item={item}/>
            })
            }
        </div>
    )
}

export default List;
