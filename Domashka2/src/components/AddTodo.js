import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import AddTodoStyles from './AddTodo.css';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('user');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title) {
            dispatch(addTodo({ id: Date.now(), title, type }));
            setTitle('');
        }
    };

    return (
        <div className="MainBox">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Добавьте пользователя"
            />
            <select onChange={(e) => setType(e.target.value)} value={type}>
                <option value="user">Обычный пользователь</option>
                <option value="VIP">VIP</option>
                <option value="business">Бизнес-пользователь</option>

            </select>
            <button onClick={handleAdd}>Добавить</button>
        </div>
    );
};

export default AddTodo;
