import { useState } from "react";
import data from "./data";

function Accordion() {
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState(false);

  const showHandler = () => {
    setShow(!show);
    setDesc(!desc);

    console.log("Accordion clicked");
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <div>
            <li key={item.id}>
              <h2>{item.question}</h2>
              <button onClick={showHandler}>+</button>
              {show && <p>{desc ? item.answer : ""}</p>}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Accordion;
