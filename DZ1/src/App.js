import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy10, decrementBy10, reset } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
      <div>
        <h1>Счетчик: {count}</h1>
        <p>---------------------------------------</p>
        <button onClick={() => dispatch(decrementBy10())}>-10</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(reset())}>Сброс</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementBy10())}>+10</button>
      </div>
  );
};

export default App;
