import { useState } from "react";
import data from "./data";

function Accordion() {
  const [show, setShow] = useState(false);

  const showHandler = () => {};

  return (
    <div>
      <ul>
        {data.map((item) => (
          <div>
            <li key={item.id}>
              <h2>{item.question}</h2>
              <button onClick={showHandler}>+</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Accordion;
