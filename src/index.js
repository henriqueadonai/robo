import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import Hello from './components/Hello';
import CardList from './components/CardList';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import  {searchReducer, robotReducer } from './reducers/reducers';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

//stoped on the 1:24:00
//https://vimeo.com/212771057

//STORE ==> APP ==> DUMP COMPONENTS ==> ACTION ==> MIDDLEWARE ==> REDUCER ===> STORE

const logger = createLogger();

const rootReducer = combineReducers({
  search : searchReducer,
  robots : robotReducer
});


const store = createStore(rootReducer, applyMiddleware(ReduxThunk ,logger));



ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>
    , document.getElementById('root')
   
);


/*<App store={store}/>
   , document.getElementById('root')*/

// ReactDOM.render(
//   <Card id='1' name='Henrique Cabral' email='henrique.cabral@appcentrica.com' />,
//   document.getElementById('root')
// );


// var nowDay = "good day";
//   // <Hello great={nowDay} />,  

// let robots = [
//   { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
//   { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
//   { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'}
//   ];;

// robots = [];
// setTimeout(() => {
// robots = [
//   { id: 1, name: 'Noel Cabral', email:'noel.cabral@gmail.com.br'},
//   { id: 2, name: 'Maria Rosa', email:'maria.cabral@gmail.com.br'},
//   { id: 3, name: 'Henrique Cabral', email:'henrique.cabral@gmail.com.br'}
//   ];
// },3000);
{/*<CardList robots={robots} />*/}