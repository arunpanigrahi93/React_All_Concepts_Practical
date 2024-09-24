import React, { memo } from "react";
const Child = ({ count }) => {
  console.log("Child called");
  return (
    <div>
      <h2>Child {count}</h2>
    </div>
  );
};

export default memo(Child);
