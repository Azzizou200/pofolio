import LeftSide from "./components-dev/left-side";
import RightSide from "./components-dev/right-side";
import Spotlight from "./components-dev/spotlight";
export default function App() {
  return (
    <div id="container" className="relative">
      <Spotlight></Spotlight>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}
