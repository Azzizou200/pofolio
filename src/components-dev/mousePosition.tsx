import { useEffect, useState } from "react";
const r = document.getElementById("container");
export default function MousePosition() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: {
      clientX: number;
      clientY: number;
    }) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
      console.log(event.clientX, event.clientY);
      r?.style.setProperty(
        "background:",
        ` radial-gradient(600px at ${event.clientX} ${event.clientY},rgba(13, 48, 143, 0.15),transparent 80%);`
      );
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return coords;
}
