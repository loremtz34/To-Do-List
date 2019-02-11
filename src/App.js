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
import logo from './logo-dark.svg';
import axios from 'axios';
//import TopNavBar from './topnavbar';
//import api from './data.json';

class App extends Component { //Main class
  

  constructor(){
  super()
  this.state = {
      data_task: [],
      data_user: [],
      modalvisible:false,
      id_task_object:0,
      id_task_selected:0

  }

  }
  
 handleaddtasks = (task)=>{
    axios.post('http://192.168.1.32:3000/tasks',{
      task, 
      status:"1"
    })
    .then((res)=>{
      this.setState({data_task:[...this.state.data_task,...res.data]})
    }).catch((err)=>{console.log(err)})
    console.log(this.state.data_task);
  }

  handleaddusers =(name)=>{
    axios.post('http://192.168.1.32:3000/users',{
      name
    }).then((res)=>{
      this.setState({data_user:[...this.state.data_user,...res.data]})
    }).catch((err)=>{console.log(err)})
  }

  async componentWillMount(){

   const [{data: tasks}, { data: users}]= await  Promise.all([axios.get('http://192.168.1.32:3000/tasks'), 
    axios.get('http://192.168.1.32:3000/users')
  
  ])
  this.setState({data_task: tasks, data_user: users})
  }


// to open modal  
handleOpenModal=(id)=>{
  this.setState({modalvisible:true,id_task_selected:id })
}

//to close modal
handleCloseModal=(event)=>{
  this.setState({modalvisible:false})
}

  //adding user to array
  handleuser=(user)=>{
  this.setState({data_user:[...this.state.data_user,user]})
}
//adding task to array
  handletask = (task)=>{
    let taskObject={id:this.state.id_task_object, task:task, user:"", state:1} 
    let new_id= this.state.id_task_object +1;
    
    this.setState({data_task:[...this.state.data_task,taskObject], id_task_object:new_id})
    //console.log(task) reviewing task
  }

   
  //title
  //adding task to array in main
  render() {
    return (
      <div className="row">
      <header className="App-header" >
        <img src={logo} alt="Logo condor" className="logo"></img>  TO DO     
      </header>
      
      <div className="div">
          
          <Title Text={"To-Do List"}></Title>
          <Form addTask={this.handleaddtasks}></Form>
          <List type={"task"} data={this.state.data_task} openModal={this.handleOpenModal} idSelected={this.handleTaskSelected}></List> 
      </div>

      <div className="child_div">
          <Title Text={"Users"}></Title>
          <FormUser addUser={this.handleaddusers}></FormUser>
          <List type={"user"} data={this.state.data_user} ></List>
      </div>
      {
        this.state.modalvisible &&
        <ModalContainer>
          <Modal 
            modalClose={this.handleCloseModal} 
            idSelected={this.state.id_task_selected}
            data={this.state.data_user}>
              <h1>ESTO ES UN MODAL</h1>
          </Modal>
        </ModalContainer>
      }
      
      </div>
    );
  }
}

export default App;
