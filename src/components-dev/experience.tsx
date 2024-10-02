import ToolsUsed from "./tools-used";
export default function Experience(props: any) {
  return (
    <div className="cards">
      <div className="date">
        <p>{props.dates}</p>
      </div>
      <div className="title-and-description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="tools">
        {props.tools.map((tool: any, index: any) => (
          <ToolsUsed tools={tool} key={index} />
        ))}
      </div>
    </div>
  );
}
