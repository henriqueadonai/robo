import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots : []
    }
    setTimeout(() => {
      this.setState({
      robots : [
      { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
      { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
      { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'}
      ]
    })
    },3000);
   }


  render() {
    return (
      <CardList robots={this.state.robots} />
    );
  }
}

export default App;
