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
    <li
      className="main_menus"
      key={section.id}
      style={{
        height: "40px",
        width: "100%",
      }}
    >
      <img
        className="main_menus_icons"
        src={`./img/${section.img}`}
        alt={`${section.alt}`}
      ></img>
      <span className={`main_menus ${expanded ? "animate" : ""}`}>
        {expanded && section.title}
      </span>
    </li>
  ));

  return (
    <nav
      // className={`sidebar ${expanded ? "expanded" : ""}`}
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