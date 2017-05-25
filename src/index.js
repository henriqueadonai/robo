import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Hello from './Hello';
import CardList from './CardList';
import 'tachyons';


var nowDay = "good day";
  // <Hello great={nowDay} />,  

let robots = [
  { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
  { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
  { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'}
  ];;

// robots = [];
// setTimeout(() => {
// robots = [
//   { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
//   { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
//   { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'}
//   ];
// },3000);
{/*<CardList robots={robots} />*/}

ReactDOM.render(
   <App/>
   , document.getElementById('root')
);


// ReactDOM.render(
//   <Card id='1' name='Henrique Cabral' email='henrique.cabral@appcentrica.com' />,
//   document.getElementById('root')
// );
