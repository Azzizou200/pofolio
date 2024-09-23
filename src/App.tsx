import LeftSide from "./components-dev/left-side";
import RightSide from "./components-dev/right-side";
const r = document.getElementById("container");

window.addEventListener("mousemove", (event) => {
  r?.style.setProperty(
    "background",
    " radial-gradient(600px at " +
      event.clientX +
      " " +
      event.clientY +
      ",rgba(13, 48, 143, 0.15),transparent 80%)"
  );
});

export default function App() {
  return (
    <div id="container">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}
