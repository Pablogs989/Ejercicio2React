import { useState } from "react";

const Counter = ({ initialState, num }) => {
  const [counter, setCounter] = useState(initialState);
  const increment = () => {
    setCounter(counter + num);
    console.log(counter);
  };
  const decrement = () => {
    setCounter(counter - num);
    console.log(counter);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <span>
        {counter}
      </span>
    </div>
  );
};

export default Counter;
