type Tools = {
  tool: string;
};
export default function ToolsUsed(props: Tools) {
  return (
    <div className="tool-used">
      <h6> {props.tool}</h6>
    </div>
  );
}
