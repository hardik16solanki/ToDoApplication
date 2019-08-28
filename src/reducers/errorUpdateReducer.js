import { GET_UPDATE_ERRORS } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_UPDATE_ERRORS:
            return action.payload;
        default:
            return state;
    }
}