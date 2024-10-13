import Paragraph from "./paragraph";
import Experience from "./experience";

const data = {
  dates: [
    "2024-present",
    "2018-2024",
    "2014-2018",
    "july- dec 2017",
    "2016-2017",
    "july- dec 2016",
    "july- dec 2015",
  ],
  title: [
    "Senior Frontend Engineer, Accessibility ·Klaviyo",
    "Lead Engineer ·Upstatement",
    "UI Engineer Co-op ·Apple",
    "Developer · Scout Studio",
    "Software Engineer Co-op ·Starry",
    "Creative Technologist Co-op · MullenLowe U.S.",
  ],
  description: [
    "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
    "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
  ],
  tools: [
    ["JavaScript", "TypeScript", "React", "Storybook"],
    [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Contentful",
      "Node.js",
      "PHP",
    ],
    ["Jekyll", "SCSS", "JavaScript", "WorldPress"],
    ["Condova", "Backbone", "JavaScript", "CSS"],
    ["HTML", "CSS", "JavaScript", "JQuery"],
  ],
};

export default function RightSide() {
  return (
    <div className="right-side">
      <Paragraph />
      <div className="experiences" id="experiences">
        {data.tools.map((tool: string[], index: number) => (
          <Experience
            key={index}
            tools={tool}
            dates={data.dates[index]}
            title={data.title[index]}
            description={data.description[index]}
          />
        ))}
      </div>
    </div>
  );
}
