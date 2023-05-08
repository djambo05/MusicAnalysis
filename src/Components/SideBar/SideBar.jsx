import { useState } from "react";
import "../../styles/global.css";
import "./SideBar.scss";
import { render } from "@testing-library/react";
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
      subsections: [
        {
          id: 4.1,
          title: "Чарты 4.1",
          img: "promotion.png",
          alt: "charts",
        },
        {
          id: 4.2,
          title: "Чарты 4.2",
          img: "promotion.png",
          alt: "charts",
        },
      ],
    },
    {
      id: 5,
      title: "Новости",
      img: "newspaper.png",
      alt: "newspaper",
    },
  ];
  const [expanded, setExpanded] = useState(false);
  const [dropDownList, setDropDownList] = useState(false);
  const dropDown = () => {
    setDropDownList(!dropDownList);
  };
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  function renderMenu(mas) {
    return (
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
        {mas.map((obj) => (
          <li className="menus-li" key={obj.id}>
            <img
              style={{
                width: "27px",
                height: "27px",
                pointerEvents: "none",
                marginLeft: "21.5px",
                color: "#F0F0F0",
              }}
              src={`./img/${obj.img}`}
              alt={`${obj.alt}`}
            ></img>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                animation: "sidebar-expand 0.3s ease forwards",
              }}
            >
              {expanded && obj.title}
            </span>
            {obj.subsections ? (
              <img
                src={`./img/${dropDownList ? "up.png" : "down.png"}`}
                alt={`${dropDownList ? "up.png" : "down.png"}`}
              ></img>
            ) : (
              <span style={{ flexGrow: 1 }}></span>
            )}
          </li>
        ))}
      </ul>
    );
  }

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
      <div
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          width: "100%",
          height: "80px",
          backgroundColor: "#3051FF",
        }}
      >
        <img
          style={{
            marginLeft: "15px",
          }}
          src="./img/music-icon.png"
          alt="music-icon"
        ></img>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "24px",
            color: "white",
            whiteSpace: "nowrap",
            animation: "sidebar-expand 0.3s ease forwards",
          }}
        >
          {expanded && "Music Manage"}
        </span>
        <span style={{ flexGrow: 1 }}></span>
      </div>
      {renderMenu(menuData)}
      <div style={{ flexGrow: 1 }}></div>
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
            height: "24px",
            width: "100%",
          }}
          onClick={toggleExpanded}
        >
          <img
            style={{
              marginLeft: "23px",
            }}
            src={`./img/${expanded ? "reverseArrow.png" : "arrow.png"}`}
            alt="Arrow"
          ></img>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            gap: "13.5px",
            height: "40px",
            width: "100%",
          }}
        >
          <img
            style={{
              marginLeft: "15px",
            }}
            src="./img/avatar.png"
            alt="Avatar"
          ></img>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              animation: "sidebar-expand 0.3s ease forwards",
            }}
          >
            {expanded && "Настройки аккаунта"}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
