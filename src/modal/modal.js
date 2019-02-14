import React from 'react';
import '../app.css';


class Modal extends React.Component{
    //let default_user= props.data_user.find(item => item.id === props.task_selected.user)
    //console.log(default_user)

    state={
        result_user: this.props.task_selected.user,
        result_state: this.props.task_selected.status,
        result_task: this.props.task_selected.task
    }

    handleSelectChangeUser = (event) => {
        this.setState({
          result_user: event.target.value
        })
        //console.log(this.state.result_user)
      }

      
    handleSelectChangeTask = (event) => {
        this.setState({
          result_task: event.target.value
        })
       // console.log(this.state.result_task)
      }

      handleSelectChangeState= (event) => {
        this.setState({
          result_state: event.target.value
        })
        //console.log(this.state.result_state)
      }

      handleSave=()=>{
        this.props.handleSave(
            this.props.task_selected.id,
            this.state.result_task,
            this.state.result_state,
            this.state.result_user
            )
      }

    render(){
    return(
        <div className="Modal">
        <h1>id {this.props.task_selected.id} </h1>
        <div>
            <label>Change task name: </label>
            <input type="text" onChange={this.handleSelectChangeTask} placeholder={this.props.task_selected.task}/>
        </div><br></br>
        <div>
            <label>Add User: </label>
            <select  
            name="2" 
            onClick={this.handleSelectChangeUser}
            defaultValue={""+(this.props.task_selected.user? this.props.task_selected.user : "1")}>
                <option value="1" >--Select a user--</option>
                {
                    this.props.data_user.map((item) => {
                        return <option value={item.id} key={item.id}>{item.name}</option> 
                    })
                }
            </select>
        </div><br></br>
        <div>
            <label>Edit State: </label>
            <select 
            name="OS" 
            onClick={this.handleSelectChangeState}
            defaultValue={(this.props.task_selected.state? this.props.task_selected.state : 1)}>
                <option value={1}>Open</option> 
                <option value={2}>In-Progress</option> 
                <option value={3}>Completed</option>
                <option value={4}>Archived</option>
            </select>
            </div><br></br>
        <button onClick={this.handleSave} >Save</button>
        <button onClick={this.props.modalClose}>Close</button>
        </div>
    )};
}
export default Modal;