import React from 'react';
import Task from './tasks/task';
import User from './user/user';

const List =(props)=>{
    if(!props.type.localeCompare("task")){
        console.log("ENTROOO")
        return(
            <div>
                {props.data.map((item) =>{
                    return <Task item={item} openModal={props.openModal}/>
                })
                }
            </div>
        )

    }else{
        return(
            <div>
                {props.data.map((item) =>{
                    return <User item={item}/>
                })
                }
            </div>
        )

    }
}

export default List;
