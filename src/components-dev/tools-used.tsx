type Tools = {
  tools: string;
};
export default function ToolsUsed(props: Tools) {
  return (
    <div className="tool-used" key={"props.tools"}>
      <h6> {props.tools}</h6>
    </div>
  );
}
