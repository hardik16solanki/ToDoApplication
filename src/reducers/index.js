import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import todoReducer from './todoReducer';
import errorUpdateReducer from './errorUpdateReducer'

export default combineReducers({
    errors: errorReducer,
    todo: todoReducer,
    updateErrors: errorUpdateReducer

})
