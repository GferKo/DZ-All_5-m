import React from 'react';
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const MainPage = () => {
    return (
        <div>
            <h1>Todo list</h1>
            <AddTodo/>
            <TodoList/>
        </div>
    );
};

export default MainPage;