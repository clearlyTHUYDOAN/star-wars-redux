// import action types
import { ACTION_TYPES } from '../actions/index'; // for use in switch cases

// initial state
const INITIAL_STATE = {
 list: []
}

// reducer
export const characters = (state = INITIAL_STATE, {type, payload}) => {
    // switch cases for action types 
    switch (type) {
        case ACTION_TYPES.getCharacters:
            return {...state, ...{list: payload.characters}} // Returns (aka "updates") new state according to this. 
        default:
            return state;
    }
}
