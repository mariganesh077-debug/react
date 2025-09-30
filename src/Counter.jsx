import { useState } from "react";

export default function Counter() {
  // declare a state variable "count" and a function "setCount" to update it
  const [count, setCount] = useState(0);

  // event handler to increment the count
  const handleIncrement = () => setCount(count + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}