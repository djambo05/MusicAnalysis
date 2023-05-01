const SideBar = ({ sections, status }) => {
  return (
    <div
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
          height: "300px",
          listStyle: "none",
          marginTop: "23px",
          marginBottom: 0,
          padding: "8px 0px",
        }}
      >
        {sections.map((section) => (
          <li
            key={section.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "31px",
              width: "100%",
              transition: "background 0.1s ease",
              // "&:hover": {
              //   background:
              //     "linear-gradient(90deg, rgba(255, 255, 255, 0.15) -7.41%, rgba(255, 255, 255, 0) 85.19%)",
              // },
            }}
            onClick={() => {
              status(section);
            }}
          >
            <img src={`./img/${section.img}`} alt={`${section.alt}`}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
