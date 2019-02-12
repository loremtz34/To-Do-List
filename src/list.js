import React from 'react';
import Task from './tasks/task';
import User from './user/user';

const List =(props)=>{
    if(!props.type.localeCompare("task")){
        return(
            <div>
                {props.data.map((item) =>{
                    return <Task 
                            key={item.id} 
                            item={item} 
                            openModal={props.openModal} 
                            data_user={props.data_user}/>
                })
                }
            </div>
        )
    }else{
        return(
            <div>
                {props.data.map((item) =>{
                    return <User  key={item.id} item={item}/>
                })
                }
            </div>
        )
    }
}

export default List;
