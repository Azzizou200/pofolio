export default function BookMarks() {
  return (
    <nav className="bookmarks">
      <ul className="bookmarks-box">
        <li className="bookmark " key={"start"}>
          <hr className="short-line"></hr>
          <p>about</p>
        </li>
        <li className="bookmark" key={"middle"}>
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
