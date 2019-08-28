import axios from 'axios';
import { GET_ERRORS, GET_TODOS } from './types';

export const createToDo = (todoItem, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8181/api/todo", todoItem);
        // history.push("/home");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getToDos = () => async dispatch => {
    const res = await axios.get("http://localhost:8181/api/todos");
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });

}

export const updateToDo = (todoItem, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8181/api/todo", todoItem);
        // history.push("/home");
    } catch (error) {
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: error.response.data
        // })
    }
}