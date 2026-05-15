import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const MAX = 99999999999;
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => Math.min(count + 1, MAX));
  };
  const handleDecrement = () => {
    setCount((count) => Math.max(count - 1, -MAX));
  };
  const handleMultiplyByFive = () => {
    setCount((count) => Math.max(Math.min(count * 5, MAX), -MAX));
  };
  const handleDivideByTwo = () => {
    setCount((count) => Math.floor(count / 2));
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <div
        className="data"
        style={{
          fontSize: `${Math.max(36, Math.min(72, 260 / String(Math.abs(count)).length))}px`,
        }}
      >
        {count}
      </div>
      <div className="btn-grid">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button className="btn-accent" onClick={handleMultiplyByFive}>
          &times;5
        </button>
        <button className="btn-accent" onClick={handleDivideByTwo}>
          &divide;2
        </button>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
