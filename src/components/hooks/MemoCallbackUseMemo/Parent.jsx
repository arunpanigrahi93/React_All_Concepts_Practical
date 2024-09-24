import React, { useState, memo } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  const handleInc = () => {
    setCounter((prev) => prev + 1);
    console.log("Parent called");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log("Parent called");
  };
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleInc}>Count</button> {counter}
      <input type="text" value={value} onChange={handleChange} />
      <Child count={counter} />
    </div>
  );
}

export default Parent;
