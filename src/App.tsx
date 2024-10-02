import { useState } from "react";
import LeftSide from "./components-dev/left-side";
import RightSide from "./components-dev/right-side";

export default function App() {
  let [coords, setCoords] = useState({ x: 10, y: 10 });

  window.addEventListener("mousemove", (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
    console.log(coords.x, coords.y);
  });
  return (
    <div
      id="container"
      className="pointer-events-none inset-0 z-30 transition duration-300 "
      style={{
        background:
          "radial-gradient(600px at " +
          coords.x +
          "px " +
          coords.y +
          "px,rgba(13, 48, 143, 0.15),transparent 80%)",
      }}
    >
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}
