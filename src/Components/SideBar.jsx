import "../styles/global.css";
const SideBar = ({ expanded, toggle, menus }) => {
  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
      <aside>
        <div className={`main_music ${expanded ? "expanded" : ""}`}>
          <img
            style={{ position: "absolute", top: 20, left: 15 }}
            src="./img/music-icon.png"
            alt="music-icon"
          ></img>
          <span className={`menus_info ${expanded ? "animate" : ""}`}>
            {expanded && "Music Manage"}
          </span>
        </div>
        <ul className="sidebar_menu">{menus}</ul>
      </aside>
      <ul
        style={{
          gap: 10,
          marginTop: 0,
          marginBottom: 30,
          padding: "0px 0px",
        }}
      >
        <li
          style={{
            height: "24px",
            width: "100%",
          }}
          onClick={toggle}
        >
          <img
            style={{ position: "absolute", left: 23, pointerEvents: "none" }}
            src="./img/arrow.png"
            alt="Arrow"
          ></img>
        </li>
        <li
          style={{
            height: "40px",
            width: "100%",
          }}
        >
          <img
            style={{ position: "absolute", left: 15, pointerEvents: "none" }}
            src="./img/avatar.png"
            alt="Avatar"
          ></img>
          <span className={`sidebar_bottom ${expanded ? "animate" : ""}`}>
            {expanded && "Настройки аккаунта"}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
