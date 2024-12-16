import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={handleIncrement}>Increment</button>
      {/* {count} */}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
export default UseStateHook;
