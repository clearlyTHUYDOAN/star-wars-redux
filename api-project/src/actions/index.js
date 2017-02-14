import $ from 'jquery';

import { GET_ALL_CHARACTERS_URL } from '../constants/api-url'

export const ACTION_TYPES = {
    // action types with string values
    getCharacters: 'GET_CHARACTERS'
}

export function getCharacters() { // Actions are always functions?
    
    // To make sure the reducer actually gets the intended data, you can make your action use dispatch as a parameter.
    // Whatever you pass into dispatch, that gets called in the action. This is an example of a useful thunk.
    // - A thunk is anything that hides something else. Usually it's a function hiding another function(s).

    return function(dispatch) { // Dispatch makes sure reducer gets data (action).
        // api request with jquery
        // console.log(`Imported URL: ${GET_ALL_CHARACTERS_URL}`); // Doesn't like this import? Only works with curly brackets? { url } 
        $.get(GET_ALL_CHARACTERS_URL)
            .then(response => {
                dispatch({ //dispatch(action) updates the state
                    type: ACTION_TYPES.getCharacters, // ... from ACTION_TYPES
                    payload: {
                        characters: response.results // payload.characters gets passed to the reducer.
                    }
                })
            })
    }
} 

// Actions are the only source of information for the store.