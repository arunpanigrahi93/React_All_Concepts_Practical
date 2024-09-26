import React, { memo } from "react";
const Child = ({ count, onClick }) => {
  console.log("Child called");

  return (
    <div>
      <h2>Child {count}</h2>
      <button onClick={onClick}>child button</button>
    </div>
  );
};

export default memo(Child);
