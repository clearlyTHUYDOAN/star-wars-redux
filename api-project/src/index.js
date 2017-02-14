import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducer from './reducers/index'

// The store is made by the function createStore (imported from Redux). It's passed the (combined) "reducer". 
// A function combines all the reducers and that is passed into createStore. 
// Actions are the only source of information for the store.
// getState() allows access to the state.
// dispatch(action) allows state to be updated.

// Redux allows for middleware. Middleware describes special functions that occur at specific times during the regular process
// of how Redux works. If you want to intercept these things in the middle, you use middleware. 

const store = createStore(reducer, 
  applyMiddleware(thunk), // This is how thunk is integrated into the redux library
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ store } > 
    <App />
  </Provider>, // Comma goes after the last tag. 
  document.getElementById('root')
);

// Provider makes the Redux store available to the connect() calls in the component hierarchy below. 
// Normally, you can’t use connect() without wrapping the root component in <Provider>:
// - Store is a required prop type of Provider.

// All container components (smart, usually stateful components) need access to the store so they can subscribe to it.
// - Recommended way is to use a special React-Redux component called <Provider> to make the store available to all container comps
// without passing explicitly. So in between Provider tags, that's where the container components go.
// You only need to use it once.

// If you don't use provider, you have to pass store to Connect(App) in another way.
// If using react-router, put Provider on the outermost level, outside the router. 




// Data Flow:
// 1) store.dispatch(action) is called to update the state by sending actions to the store.  
// - Can call this anywhere in your app.
// 2) The redux store calls the reducer function that was passed to it (in createStore).
// - Store will pass two arguments to the reducer: current state and the action.  
// *) Root reducer may combine output of multiple reducers into a single state tree. 
// 3) The redux store saves the complete state stree returned by the root reducer. 
// - New tree is now the next state of the app.
// - Every listener registered with store.subscribe(listener) will now be invoked.  




// Redux Organizational Flow:
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
// - react: React, Component
// - react-dom: ReactDOM
// - redux: createStore, applyMiddleware, combineReducers
// - react-redux: Provider, connect
// - redux-thunk: thunk