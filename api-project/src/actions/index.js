import $ from 'jquery';

import GET_ALL_CHARACTERS_URL from '../constants/api-url'

export const ACTION_TYPES = {
    // action types with string values
    getCharacters: 'GET_CHARACTERS'
}

export function getCharacters() {
    
    // To make sure the reducer actually gets the intended data, you can make your action use dispatch as a parameter.
    // Whatever you pass into dispatch, that gets called in the action. This is an example of a useful thunk.
    // - A thunk is anything that hides something else. Usually it's a function hiding another function(s).

    return function(dispatch) { // Dispatch makes sure reducer gets data.
        // api request with jquery
        $.get(GET_ALL_CHARACTERS_URL)
            .then(response => {
                dispatch({
                    type: ACTION_TYPES.getCharacters, // ... from ACTION_TYPES
                    // payload: {

                    // }
                })
            })
    }
} 