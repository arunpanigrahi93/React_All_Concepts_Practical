import React, { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getItemId) {
    console.log(getItemId);
  }

  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} onClick={() => handleSingleSelection(item.id)}>
            <h2>{item.question}</h2>
            <span>+</span>
          </div>
        ))
      ) : (
        <div>No data present</div>
      )}
    </div>
  );
}
