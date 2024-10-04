import { useState } from "react";
export default function Spotlight() {
  let [coords, setCoords] = useState({ x: 10, y: 10 });
  const spotlighUpdate = (event: any) => {
    setCoords({
      x: event.clientX,
      y: event.clientY + window.scrollY,
    });
  };
  window.addEventListener("mousemove", spotlighUpdate);
  window.addEventListener("onwheel", spotlighUpdate);
  return (
    <div
      id="spotlight"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background:
          "radial-gradient(600px at " +
          coords.x +
          "px " +
          coords.y +
          "px,rgba(29, 78, 216, 0.15),transparent 80%)",
      }}
    ></div>
  );
}
