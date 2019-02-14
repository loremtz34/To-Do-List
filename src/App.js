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
import Search from './search';
//import TopNavBar from './topnavbar';
//import api from './data.json';

class App extends Component { //Main class
  
  constructor(){
  super()
  this.state = {
      data_task: [],
      data_user: [],
      modalvisible:false,
      id_task_selected:0,
      task_object_modal:{},
      url_base: 'http://localhost:3000',
      array_search_task:[]
  }
  }

  handleShowState(value){
    switch (value) {
      case 1:
        return "open";
      case 2:
        return "in progress";
      case 3:
        return "completed";
      case 4:
        return "archived";
      default:
        return "open";
    }
  }

  handlesearch= (input)=>{
   axios.get(this.state.url_base + '/search/'+ input)
  .then ((res)=>{
    this.setState({array_search_task:res.data})
    console.log(res.data)}).catch((err)=>{console.log(err)})
  }

   handlesaveinfo=(id_task,task,state,id_user)=>{
    //  console.log(id_task)
    //  console.log(task)
    //  console.log(state)
    //  console.log(id_user)
    let array_task=this.state.data_task.filter(item =>{ return item.id !== id_task})
    axios.put(this.state.url_base+"/tasks/"+id_task,{
      task,
      user:id_user,
      status:state
    }).then( res =>{ this.setState({data_task:[...array_task,res.data]})})
    .catch((err)=>console.log(err))
  }

 handleaddtasks = (task)=>{
    axios.post( this.state.url_base +'/tasks',{
      task, 
      status:"1"
    })
    .then((res)=>{
      this.setState({data_task:[...this.state.data_task,...res.data]})
    }).catch((err)=>{console.log(err)})
    console.log(this.state.data_task);
  }

  handleaddusers =(name)=>{
    axios.post(this.state.url_base +'/users',{
      name
    }).then((res)=>{
      this.setState({data_user:[...this.state.data_user,...res.data]})
    }).catch((err)=>{console.log(err)})
  }

  async componentWillMount(){

   const [{data: tasks}, { data: users}]= await  Promise.all([axios.get(this.state.url_base +'/tasks'), 
    axios.get(this.state.url_base +'/users')
  
  ])
  this.setState({data_task: tasks, data_user: users})
  }

// to open modal  
handleOpenModal=(id)=>{
  let task = this.state.data_task.find(item => item.id === id )
  this.setState({modalvisible:true,id_task_selected:id, task_object_modal:task })
}

//to close modal
handleCloseModal=(event)=>{
  this.setState({modalvisible:false})
}

  //adding user to array
  handleuser=(user)=>{
  this.setState({data_user:[...this.state.data_user,user]})
}

   
  //title
  //adding task to array in main
  render() {
    return (
      <div className="row">
      <header className="App-header" >
        <img src={logo} alt="Logo condor" className="logo"></img>  TO DO     
      </header>
      <div className="container">
      <div>
          
          <Title Text={"To-Do List"}></Title>
          <Form addTask={this.handleaddtasks}></Form>
          <List 
          type={"task"} 
          data={this.state.data_task} 
          openModal={this.handleOpenModal} 
          idSelected={this.handleTaskSelected}
          data_user={this.state.data_user}
          handleState={this.handleShowState}></List> 

      </div>
      <div>
        <Title Text={"Search Task"}></Title>
        <Search search={this.handlesearch}></Search>
        <List type={"task"} data={this.state.array_search_task} data_user={this.state.data_user}></List>
      </div>

      <div>
          <Title Text={"Users"}></Title>
          <FormUser addUser={this.handleaddusers}></FormUser>
          <List type={"user"} data={this.state.data_user} ></List>
      </div>
      </div>
      {
        this.state.modalvisible &&
        <ModalContainer>
          <Modal 
            handleSave={this.handlesaveinfo}
            modalClose={this.handleCloseModal} 
            task_selected={this.state.task_object_modal}
            data_user={this.state.data_user}
            onsave_user={this.handlesaveinfo}>
              <h1>ESTO ES UN MODAL</h1>
          </Modal>
        </ModalContainer>
      }
      
      </div>
    );
  }
}

export default App;
