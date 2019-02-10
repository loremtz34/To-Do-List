//to start the project, i started with ´npm create-react-app´
//this gived me a template of a simple app in react
//i just deleted the things that i considered were not necesary for this case.

import React, { Component } from 'react';
import Form from './tasks/form';
import Title from './title';
import List from './list';
import './app.css';
import FormUser from './user/form_user';
import ModalContainer from './modal/modalcontainer';
import Modal from './modal/modal';
//import api from './data.json';

class App extends Component { //Main class
  
  state={
    data_task: [],
    data_user: [],
    modalvisible:false
  }

// to open modal  
handleOpenModal=(event)=>{
  this.setState({modalvisible:true})
}

//to close modal
handleCloseModal=(event)=>{
  this.setState({modalvisible:false})
}

  //adding user to array
  handleuser=(user)=>{
  this.setState({data_user:[...this.state.data_user,user]})
  console.log(this.state.data_user)
}
//adding task to array
  handletask = (task)=>{
    let taskObject={id:"", task:task, user:"", state:1} 
    this.setState({data_task:[...this.state.data_task,task]})
    console.log(this.state.data_task)
    //console.log(task) reviewing task
  }
  
  //title
  //adding task to array in main
  render() {
    return (
      <div>
      <div className="div">
          <Title Text={"To-Do List"}></Title>
          <Form addTask={this.handletask}></Form>
          <List type={"task"} data={this.state.data_task} openModal={this.handleOpenModal}></List> 
      </div>
      <div className="child_div">
          <Title Text={"Users"}></Title>
          <FormUser addUser={this.handleuser}></FormUser>
          <List type={"user"} data={this.state.data_user} ></List>
      </div>
      {
        this.state.modalvisible &&
        <ModalContainer>
          <Modal modalClose={this.handleCloseModal}>
              <h1>ESTO ES UN MODAL</h1>
          </Modal>
        </ModalContainer>
      }
      </div>
    );
  }
}

export default App;
