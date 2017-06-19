import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import {setSearchTerm} from '../actions/actions'


const mapStateToProps = state => {
  return {
    searchTerm : state.search.searchTerm
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchTerm(event.target.value))
  }

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots : [],
      isPending: true
    }


    //before redux
    // this.state = {
    //   robots : [],
    //   searchTerm: '',
    //   isPending: true
    // }
    //this.onSearchChange = this.onSearchChange.bind(this);

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

//before redux
  // onSearchChange(evt){
  //   console.log(evt.target.value);
  //   this.setState({searchTerm: evt.target.value});
  // }


  componentDidMount(){
    console.log("Store");
    console.log(this.props.store);

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
    //Before redux
    // const {searchTerm, robots, isPending} = this.state;

    const {robots, isPending} = this.state;
    const { onSearchChange, searchTerm } = this.props;

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });    
    
    return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <Scroll>
          <SearchBox onSearchChange={onSearchChange}/>
          {isPending ? <h2>Loading...</h2>: <CardList robots={filteredRobots} /> }
        </Scroll>
      </div>
    );

    //before redux
    /*return (
      <div className='tc'>
        <h1>RoboDex</h1>
        <Scroll>
          <SearchBox onSearchChange={this.onSearchChange}/>
          {isPending ? <h2>Loading...</h2>: <CardList robots={filteredRobots} /> }
        </Scroll>
      </div>
    );*/
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
