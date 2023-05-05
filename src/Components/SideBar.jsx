import "./style.css";
const SideBar = ({ sections, status, expanded, toggle }) => {
  return (
    <nav className={`sidebar ${expanded ? "expanded" : ""}`}>
      <aside>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80px",
            backgroundColor: "#3051FF",
          }}
        >
          <img src="./img/music-icon.png" alt="music-icon"></img>
        </div>
        <ul
          style={{
            height: 290,
            marginTop: 31,
            marginBottom: 0,
            padding: "0px 0px",
          }}
        >
          {sections.map((section) => (
            <li
              id="section"
              key={section.id}
              style={{
                height: "40px",
                width: "100%",
              }}
              onClick={() => {
                status(section);
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg,  rgba(255, 255, 255, 0.15) -7.41%, rgba(255, 255, 255, 0) 26.95px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
              }}
            >
              <img
                style={{ pointerEvents: "none" }}
                src={`./img/${section.img}`}
                alt={`${section.alt}`}
              ></img>
            </li>
          ))}
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
