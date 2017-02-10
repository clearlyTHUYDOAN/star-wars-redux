import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connect function at the bottom comes from Redux. It connects our application to Redux. 

import { getCharacters } from './actions/index';
import { Characters } from './components/characters';
import './App.css';

const mapStateToProps = state => ({ // Makes state available as props.
  characters: state.test
})

const mapDispatchToProps = { // Makes actions available as props.
  getCharacters
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars API</h1>
          <Characters />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
// Connect function at the bottom comes from Redux. It connects our application to Redux. 
// Very important. Everything goes through it.
// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.
