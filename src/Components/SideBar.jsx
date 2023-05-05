import "../styles/global.css";
const SideBar = ({ expanded, toggle, menus }) => {
  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
      <aside>
        <div className={`temp ${expanded ? "expanded" : ""}`}>
          <img src="./img/music-icon.png" alt="music-icon"></img>
          <span className={`music ${expanded ? "animate" : ""}`}>
            {expanded && "Music Manage"}
          </span>
        </div>
        <ul
          className="new"
          style={{
            height: 290,
            marginTop: 31,
            marginBottom: 0,
            padding: "0px 0px",
          }}
        >
          {menus}
        </ul>
      </aside>
      <ul
        style={{
          gap: 10,
          marginTop: 0,
          marginBottom: 30,
          padding: "0px 0px",
        }}
      >
        <li onClick={toggle}>
          <img
            style={{ pointerEvents: "none" }}
            src="./img/arrow.png"
            alt="Arrow"
          ></img>
        </li>
        <li>
          <img
            style={{ pointerEvents: "none" }}
            src="./img/avatar.png"
            alt="Avatar"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
