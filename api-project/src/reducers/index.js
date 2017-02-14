import { combineReducers } from 'redux';
import { characters } from './starwars';

export default combineReducers ({
    // name of reducer(s) separated by commas 
    characters,
})

// combineReducers generates a function that calls your reducers with the slices of state selected according to their keys.
// In other words, it turns an object whose values are different reducing functions into a single reducing function you can
// pass to createStore. 