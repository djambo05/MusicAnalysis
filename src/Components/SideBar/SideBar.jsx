const SideBar = () => {
  return (
    <nav
      style={{
        width: "70px",
        height: "100%",
        backgroundColor: "#0E284F",
        position: "fixed",
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
    </nav>
  );
};

export default SideBar;
