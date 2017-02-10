import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducer from './reducers/index'
// TO-DO: Reducers import goes here later. 

// The store is made by the function createStore (imported from Redux). It's passed the (combined) "reducer". 
// A function combines all the reducers and that is passed into createStore. 

// Redux allows for middleware. Middleware describes special functions that occur at specific times during the regular process
// of how Redux works. If you want to intercept these things in the middle, you use middleware. 

const store = createStore(reducer, 
  applyMiddleware(thunk), // This is how thunk is integrated into the redux library
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, // Comma goes after the last tag. 
  document.getElementById('root')
);

// Provider makes the Redux store available to the connect() calls in the component hierarchy below. 
// Normally, you can’t use connect() without wrapping the root component in <Provider>.
// If using react-router, put Provider on the outermost level, outside the router. 



// Redux Flow:
// - Consider organizing with these folders: actions, components, constants, reducers. 
// - Then App and Index in top src folder. 
// 1) Set up main component, action(s) and reducer(s). 
// - Don't forget connect, mapStateToProps and mapDispatchToProps in the main app component. 
// 2) Combine reducers in a separate file. 
// 3) Create your store in your index.js file. Here we also ReactDOM.render, pass combined reducers to store,
// and then pass the store to our components with Provider.
// 4) Create constants as you go.
// 5) Test. 

// MODULES:
// - react:
// - react-dom: 
// - redux: 
// - react-redux:
// - redux-thunk: 