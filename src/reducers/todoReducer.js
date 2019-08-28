import { GET_TODOS } from '../actions/types';

const initialState = {
    todos: [],
    todo: {}
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: actions.payload
            };
        default:
            return state;
    }
}