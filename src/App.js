//to start the project, i started with ´npm create-react-app´
//this gived me a template of a simple app in react
//i just deleted the things that i considered were not necesary for this case.

import React, { Component } from 'react';
import Form from './form';
import Title from './title';
import List from './list';
//import api from './data.json';

class App extends Component { //Main class
  
  state={
    data: []
  }
  //adding task to array
  handletask = (task)=>{
    
    this.setState({data:[...this.state.data,task]})
    console.log(this.state.data)
    //console.log(task) reviewing task
  }
  
  //title
  //adding task to array in main
  render() {
    return (
      <div className="App">
          <Title></Title>
          <Form addTask={this.handletask}></Form>
          <List data={this.state.data}></List> 
      </div>
    );
  }
}

export default App;
