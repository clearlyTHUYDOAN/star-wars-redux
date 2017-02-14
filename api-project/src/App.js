import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connect function at the bottom comes from Redux. It connects our application to Redux. 

import { getCharacters } from './actions/index';
import { Characters } from './components/characters';
import './App.css';

const mapStateToProps = state => ({ // Makes state available as props.
  characters: state.characters.list
})

const mapDispatchToProps = { // Makes actions available as props.
  getCharacters
}

class App extends Component {
  componentDidMount() {
    this.props.getCharacters(); // Triggers the action made accessible through mapDispatchToProps. 
    // Reducer takes the current state, that action, and returns new state. Re-render.
  }

  render() {
    const { characters } = this.props; // Destructuring the state made accessible through mapStateToProps. 
    // console.log(this.props.getCharacters); // This is the action with the dispatch in actions/index.js. 
    // console.log(this.props.characters); // This is the state in reducers/starwars.js. 

    return (
      <div className="App">
        <h1>Star Wars API</h1>
          <Characters />
          {characters.map((character, index) => <h4 key={index}>{character.name}</h4>)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
// Connect function at the bottom comes from Redux. It connects our application to Redux. 
// Very important. Everything goes through it.
// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.

// The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely it will be accessed using
// a helper like react-redux's connect();
// store.dispatch() sends actions to the store. 
