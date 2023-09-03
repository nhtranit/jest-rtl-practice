import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
