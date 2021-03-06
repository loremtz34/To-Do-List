import {Button} from 'react-bootstrap';
import React from 'react';

// in this component the tasks are created

class FormUser extends React.Component {
    // this is the state of the input whilst the user writes the task
    state={
        new_user:""
    }

//this method sets the state in the imput

    handleuser = (event) => {
        this.setState({
            new_user:event.target.value
        })
        //console.log(event.target.value)
    }
    //adding task to the array 
    handleadduser=() =>{
        if(this.input.value !==""){
            this.props.addUser(this.state.new_user)
            this.setState({new_user:""}) // state becomes 0 
           // console.log(this.input.value)
            this.input.value="";
        }
    }

    render(){
        return (
        <div>
            <input
            style={{width:'60%', height:40, marginBottom:10}} 
            ref= {input=> this.input= input} placeholder="ADD USER" onChange={this.handleuser}/>
            <Button style={{width:'20%'}} variant="warning" onClick={this.handleadduser}>Add</Button>
        </div>
        )};
}

export default FormUser;