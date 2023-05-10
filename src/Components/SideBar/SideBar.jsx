import { useState } from "react";
import { Menu } from "./Menu/Menu";

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#0E284F",
        position: "fixed",
        width: expand ? "70px" : "228px",
        transitionDelay: "0.2s",
        transitionDuration: "0.4s",
        transitionProperty: "width",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            backgroundColor: "#3051FF",
            width: expand ? "70px" : "228px",
            transitionDelay: "0.2s",
            transitionDuration: "0.4s",
            transitionProperty: "width",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img src="./img/music-icon.png" alt="music-icon"></img>
            <span style={{ whiteSpace: "nowrap" }}>Music</span>
          </div>
        </div>
        <Menu expand={expand} />
      </div>
      <div
        style={{
          display: "flex",
          width: expand ? "70px" : "228px",
          transitionDelay: "0.2s",
          transitionDuration: "0.4s",
          transitionProperty: "width",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <ul
          style={{
            width: "100%",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "30px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <button
                style={{ padding: "10px" }}
                onClick={handleExpand}
              ></button>
            </div>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "30px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <button style={{ padding: "10px" }}></button>
              <span style={{ whiteSpace: "nowrap" }}>Settings</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
