import { useState } from "react";
import "../../styles/global.css";
import "./SideBar.scss";
import { Menus } from "./Menus";
const SideBar = () => {
  const menuData = [
    {
      id: "1",
      title: "Аналитика",
      img: "statistics.png",
      alt: "statistics",
    },
    {
      id: "2",
      title: "Моя музыка",
      img: "headphones.png",
      alt: "headphones",
    },
    {
      id: "3",
      title: "Тексты треков",
      img: "music-list.png",
      alt: "music-list",
    },
    {
      id: "4",
      title: "Маркетинг",
      img: "promotion.png",
      alt: "promotion",
      subsections: [
        {
          id: "4.1",
          title: "Чарты 4.1",
          img: "promotion.png",
          alt: "charts",
        },
        {
          id: "4.2",
          title: "Чарты 4.2",
          img: "promotion.png",
          alt: "charts",
        },
      ],
    },
    {
      id: "5",
      title: "Новости",
      img: "newspaper.png",
      alt: "newspaper",
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  console.log(typeof dropDownList);
  const dropDown = (id) => {
    if (dropDownList.includes(id)) {
      setDropDownList((prev) => prev.filter((_id) => _id !== id));
    } else {
      setDropDownList((prev) => [...prev, id]);
    }
    // console.log("id =", id);
    // console.log("dropdown -", dropDownList);
  };
  const toggleExpanded = () => {
    setExpanded(!expanded);
    setDropDownList([]);
  };

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
        transitionProperty: "width",
        transitionDelay: "0.05s",
        transitionDuration: "1s",
        transitionTimingFunction: "ease-in-out",
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
            opacity: expanded ? 1 : 0,
            visibility: expanded ? "visible" : "hidden",
            transitionProperty: "opacity, visibility",
            transitionDelay: "0.3s",
            transitionDuration: "1s",
            transitionTimingFunction: "ease-in-out",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "24px",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          Music Manage
        </span>
        <span style={{ flexGrow: 1 }}></span>
      </div>
      <Menus
        mas={menuData}
        expanded={expanded}
        dropDown={dropDown}
        dropDownList={dropDownList}
      />
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
              opacity: expanded ? 1 : 0,
              visibility: expanded ? "visible" : "hidden",
              transitionProperty: "opacity, visibility",
              transitionDelay: "0.3s",
              transitionDuration: "1s",
              transitionTimingFunction: "ease-in-out",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "17px",
              textDecorationLine: "underline",
              color: "#FFFFFF",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            Настройки аккаунта
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
