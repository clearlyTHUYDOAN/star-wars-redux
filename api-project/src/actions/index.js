import $ from 'jquery';

export const ACTION_TYPES = {
    // action types
}

export function getCharacters() {
    
    // To make sure the reducer actually gets the intended data, you can make your action use dispatch as a parameter.
    // Whatever you pass into dispatch, that gets called in the action. This is an example of a useful thunk.
    // - A thunk is anything that hides something else. Usually it's a function hiding another function(s).

    return function(dispatch) {
        // api request
    }
} 