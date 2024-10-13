import { useEffect, useRef } from "react";

export default function BookMarks() {
  const experience = useRef<Element | null>(null);
  const paragraph = useRef<Element | null>(null);

  useEffect(() => {
    experience.current = document.querySelector("#experiences");
    paragraph.current = document.querySelector("#intro");
  }, []);
  return (
    <nav className="bookmarks">
      <ul className="bookmarks-box">
        <li
          className="bookmark "
          key={"start"}
          onClick={() => {
            console.log(paragraph);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <hr className="short-line"></hr>
          <p>about</p>
        </li>
        <li
          className="bookmark"
          key={"middle"}
          onClick={() => {
            console.log(experience);
            experience.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <hr className="short-line"></hr>
          <p>experiences</p>
        </li>
        <li className="bookmark" key={"end"}>
          <hr className="short-line"></hr>
          <p>projects</p>
        </li>
      </ul>
    </nav>
  );
}
