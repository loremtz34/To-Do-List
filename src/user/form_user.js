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
            <input ref= {input=> this.input= input} placeholder="ADD USER" onChange={this.handleuser}/>
            <button onClick={this.handleadduser}>Add</button>
        </div>
        )};
}

export default FormUser;