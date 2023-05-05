import "./style.css";
const SideBar = ({ sections, status }) => {
  return (
    <nav
      style={{
        width: "70px",
        height: "100%",
        backgroundColor: "#0E284F",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#3051FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="./img/music-icon.png" alt="music-icon"></img>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "290px",
          listStyle: "none",
          marginTop: "31px",
          marginBottom: 0,
          padding: "0px 0px",
        }}
      >
        {sections.map((section) => (
          <li
            key={section.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              width: "100%",
            }}
            onClick={() => {
              status(section);
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(90deg,  rgba(255, 255, 255, 0.15) -7.41%, rgba(255, 255, 255, 0) 38.5%)";
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
    </nav>
  );
};

export default SideBar;
