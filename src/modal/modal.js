import React from 'react';
import '../app.css';

const modal= (props)=>{
    return(
        <div className="Modal">
        <h1>id {props.idSelected}</h1>
        <div>
            <label>Change task name: </label>
            <input type="text"/>
        </div><br></br>
        <div>
            <label>Add User: </label>
            <select name="2">
                {
                    props.data.map((item) => {
                        return <option key={item.id}>{item.name}</option> 
                    })
                }
            </select>
        </div><br></br>
        <div>
            <label>Edit State: </label>
            <select name="OS">
                <option value="1">Open</option> 
                <option value="2">In-Progress</option> 
                <option value="3">Completed</option>
                <option value="10">Archived</option>
            </select>
        </div><br></br>
        <button>Save</button>
        <button onClick={props.modalClose}>Close</button>
        </div>
    );
}
export default modal;