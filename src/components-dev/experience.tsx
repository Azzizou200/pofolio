import ToolsUsed from "./tools-used";
type prop = {
  dates: string;
  title: string;
  description: string;
  tools: Array<string>;
};

export default function Experience(props: prop) {
  return (
    <div className="cards duration-300">
      <div className="date">
        <p>{props.dates}</p>
      </div>
      <div className="title-and-description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="tools">
        {props.tools.map((tool: string, index: number) => (
          <ToolsUsed tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
}
