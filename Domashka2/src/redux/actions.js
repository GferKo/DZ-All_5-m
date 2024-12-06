export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const updateTodo = (id, updatedData) => ({
    type: UPDATE_TODO,
    payload: { id, updatedData },
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});