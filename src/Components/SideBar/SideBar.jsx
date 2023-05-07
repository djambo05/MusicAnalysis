import { useState } from "react";
import "../../styles/global.css";
import "./SideBar.scss";
const SideBar = () => {
  const menuData = [
    {
      id: 1,
      title: "Аналитика",
      img: "statistics.png",
      alt: "statistics",
    },
    {
      id: 2,
      title: "Моя музыка",
      img: "headphones.png",
      alt: "headphones",
    },
    {
      id: 3,
      title: "Тексты треков",
      img: "music-list.png",
      alt: "music-list",
    },
    {
      id: 4,
      title: "Маркетинг",
      img: "promotion.png",
      alt: "promotion",
    },
    {
      id: 5,
      title: "Новости",
      img: "newspaper.png",
      alt: "newspaper",
    },
  ];
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const menus = menuData.map((section) => (
    <li className="menus-li" key={section.id}>
      <img
        style={{
          position: "absolute",
          width: "27px",
          height: "27px",
          pointerEvents: "none",
          left: "21.5px",
          top: "6.5px",
        }}
        src={`./img/${section.img}`}
        alt={`${section.alt}`}
      ></img>
      <span
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "19px",
          color: "#FFFFFF",
          position: "absolute",
          left: "63.5px",
          top: "10.5px",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          animation: "sidebar-link 0.3s ease forwards",
        }}
      >
        {expanded && section.title}
      </span>
    </li>
  ));

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "#0E284F",
        width: expanded ? 228 : 70,
        height: "100%",
        top: 0,
        left: 0,
        transition: "width 0.3s ease-in-out",
      }}
    >
      <aside>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80px",
            backgroundColor: "#3051FF",
          }}
        >
          <img
            style={{ position: "absolute", top: 20, left: 15 }}
            src="./img/music-icon.png"
            alt="music-icon"
          ></img>
          <span
            style={{
              position: "absolute",
              top: "28px",
              left: "55px",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "24px",
              color: "white",
              whiteSpace: "nowrap",
              animation: "sidebar-link 0.3s ease forwards",
            }}
          >
            {expanded && "Music Manage"}
          </span>
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            listStyle: "none",
            height: "290px",
            marginTop: "31px",
            marginBottom: "0px",
            padding: "0px 0px",
          }}
        >
          {menus}
        </ul>
      </aside>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          listStyle: "none",
          gap: 10,
          marginTop: 0,
          marginBottom: 30,
          padding: "0px 0px",
        }}
      >
        <li
          style={{
            position: "relative",
            height: "24px",
            width: "100%",
          }}
          onClick={toggleExpanded}
        >
          <img
            style={{ position: "absolute", left: 23, pointerEvents: "none" }}
            src={`./img/${expanded ? "reverseArrow.png" : "arrow.png"}`}
            alt="Arrow"
          ></img>
        </li>
        <li
          style={{
            position: "relative",
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
