import axios from 'axios';
import { GET_ERRORS, GET_TODOS,GET_UPDATE_ERRORS,DELETE_TODO } from './types';

export const createToDo = (todoItem, history) => async dispatch => {
    try {
        // const res = await axios.post("http://localhost:8181/api/todo", todoItem);
       await axios.post("http://localhost:8181/api/todo", todoItem);
        history.push("/home");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
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
        // const res = await axios.post("http://localhost:8181/api/todo", todoItem);
        await axios.post("http://localhost:8181/api/todo", todoItem);
        // history.push("/home");
         dispatch({
            type: GET_UPDATE_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_UPDATE_ERRORS,
            payload: error.response.data
        })
    }
}

export const deleteToDo = id => async dispatch => {
    await axios.delete(`http://localhost:8181/api/todo/${id}`);
    dispatch({
        type:DELETE_TODO,
        payload: id
    }
    )
}
