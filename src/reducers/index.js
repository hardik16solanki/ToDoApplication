import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    errors: errorReducer,
    todo: todoReducer

})
