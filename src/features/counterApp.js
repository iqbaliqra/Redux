import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';

function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div style={{ textAlign: 'center', marginTop: '100px',gap:'20px' }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>
      <div style={{ marginTop: '20px' }}>
       <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default CounterComponent;
