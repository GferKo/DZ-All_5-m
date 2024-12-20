import React from 'react';
import style from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByTen, decrementByTen, reset } from './features/counter/counterSlice';

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className='container'>
            <h1>Counter: {count}</h1>
            <div className='box'>
                <button onClick={() => dispatch(decrementByTen())}>-10</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(incrementByTen())}>+10</button>
            </div>
        </div>
    );
}

export default App;