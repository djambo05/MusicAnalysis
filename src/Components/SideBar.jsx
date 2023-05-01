const SideBar = () => {
  return (
    <div
      style={{
        width: "70px",
        height: "100%",
        backgroundColor: "#0E284F",
        position: "absolute",
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
      <div style={{ marginTop: "31px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <li>
            <img src="./img/statistics.png" alt="statistics"></img>
          </li>
          <li>
            <img src="./img/headphones.png" alt="headphones"></img>
          </li>
          <li>
            <img src="./img/music-list.png" alt="music-list"></img>
          </li>
          <li>
            <img src="./img/promotion.png" alt="promotion"></img>
          </li>
          <li>
            <img src="./img/newspaper.png" alt="newspaper"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
