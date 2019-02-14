import React from 'react';
import '../app.css';
import {Button} from 'react-bootstrap';


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
        if(!event.target.value.localeCompare("")){
            this.setState({result_task:event.target.placeholder})
            console.log("ENTRO1")
        }else{
            this.setState({
            result_task: event.target.value
            })
            console.log("Entro2")
        }

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
        <h2 style={{textAlign:'center', marginBottom:20}}> EDIT USER </h2>
        <div>
            <label className="modaltext">Change task name: </label>
            <input 
            type="text" 
            onChange={this.handleSelectChangeTask} 
            placeholder={this.props.task_selected.task}
            className="modalinput"/>
        </div><br></br>
        <div>
            <label className="modaltext">Add User: </label>
            <select
            className="modalinput"  
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
            <label className="modaltext">Edit State: </label>
            <select
            className="modalinput" 
            name="OS" 
            onClick={this.handleSelectChangeState}
            defaultValue={(this.props.task_selected.state? this.props.task_selected.state : 1)}>
                <option value={1}>Open</option> 
                <option value={2}>In-Progress</option> 
                <option value={3}>Completed</option>
                <option value={4}>Archived</option>
            </select>
            </div><br></br>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Button 
                variant="warning" 
                onClick={this.handleSave} 
                style={{marginRight:16}}>Save </Button>
                <Button 
                variant="warning" 
                onClick={this.props.modalClose}
                style={{marginRight:16}}>Close </Button>
            </div>
        
        </div>
    )};
}
export default Modal;