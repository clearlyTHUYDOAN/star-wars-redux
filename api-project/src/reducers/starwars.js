// import action types
import { ACTION_TYPES } from '../actions/index'; // for use in switch cases

// initial state
const INITIAL_STATE = {
 list: [],
 test: "TESTING PASSING PROPS"
}

// reducer
export const characters = (state = INITIAL_STATE, {type, payload}) => { // store passes state and action to reducer.
    // switch cases for action types 
    switch (type) {
        case ACTION_TYPES.getCharacters:
            return {...state, ...{list: payload.characters}} // Returns (aka "updates") new state according to this. 
            // State reflected in App.js as this.state.characters because of above line.
        default:
            return state;
    }
}
