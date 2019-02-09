import React from 'react';

// in this component the tasks are created

class Form extends React.Component {
    // this is the state of the input whilst the user writes the task
    state={
        new_task:""
    }

//this method sets the state in the imput

    handlestate = (event) => {
        this.setState({
            new_task:event.target.value
        })
        //console.log(event.target.value)
    }
    //adding task to the array 
    handleaddtask=() =>{
        if(this.input.value !==""){
            this.props.addTask(this.state.new_task)
            this.setState({new_task:""}) // state becomes 0 
           // console.log(this.input.value)
            this.input.value="";
        }
    }

    render(){
        return (
        <div>
            <input ref= {input=> this.input= input} placeholder="ADD TASK" onChange={this.handlestate}/>
            <button onClick={this.handleaddtask}>Add</button>
        </div>
        )};
}

export default Form;