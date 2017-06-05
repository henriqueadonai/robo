import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots : [],
      searchTerm: '',
      isPending: true
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    // setTimeout(() => {
    //   this.setState({
    //   robots : [
    //   { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
    //   { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
    //   { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'},
    //   {id: 4, name: 'Juliana Cabral', email:'julianacabral@gmail.com'}
    //   ]
    // })
    // },3000);
   }

  onSearchChange(evt){
    console.log(evt.target.value);
    this.setState({searchTerm: evt.target.value});
  }


  componentDidMount(){
    setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => {
        this.setState({
          robots: data,
          isPending : false
        });
      });
      },3000);
  }

  render() {
    const {searchTerm, robots, isPending} = this.state;

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });    
    

    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <Scroll>
          <SearchBox onSearchChange={this.onSearchChange}/>
          {isPending ? <h2>Loading...</h2>: <CardList robots={filteredRobots} /> }
        </Scroll>
      </div>
    );
  }
}

export default App;
