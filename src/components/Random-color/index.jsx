// #456789
// rgb(25,45,67)

import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHexColor() {
    // #456789
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleGenerateRgbColor() {}

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleGenerateHexColor
            : handleGenerateRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
export default RandomColor;
