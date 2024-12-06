import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, setFilter } from '../redux/actions';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);

    const filteredTodos = todos.filter(todo =>
        filter === 'all' || todo.type === filter
    );

    return (
        <div>
            <div>
                <button onClick={() => dispatch(setFilter('all'))}>Все</button>
                <button onClick={() => dispatch(setFilter('user'))}>Обычные</button>
                <button onClick={() => dispatch(setFilter('VIP'))}>VIP</button>
                <button onClick={() => dispatch(setFilter('business'))}>Бизнес</button>

            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} ({todo.type})
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
