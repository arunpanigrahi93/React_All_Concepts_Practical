import { useState, useEffect } from "react";

function UseEffectHook() {
  const [value, setValue] = useState("Hi");

  // useEffect(() => {
  //   const newValue = "This is Arun";

  //   setTimeout(() => {
  //     setValue(newValue);
  //   }, 3000);
  // }, []);

  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
}
export default UseEffectHook;
