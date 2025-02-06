import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Function to calculate background color based on count
  const getBackgroundColor = () => {
    const level = Math.min(255, count * 10);
    return `rgb(${level}, ${255 - level}, 150)`;
  };

  return (
    <div className="counter-container" style={{ background: getBackgroundColor() }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
