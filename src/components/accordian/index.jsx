import { useState } from "react";
import data from "./data";

function Accordion() {
  const [show, setShow] = useState(null);
  const [desc, setDesc] = useState(null);

  const showHandler = (id) => {
    const newData = data.filter((item) => id === item.id);
    setShow(id === show ? null : id);
    setDesc(newData);

    console.log("Accordion clicked");
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <li>
              <h2>{item.question}</h2>
              <button onClick={() => showHandler(item.id)}>+</button>
              {show === item.id && <p>{item.answer}</p>}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
