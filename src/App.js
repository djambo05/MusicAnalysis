import { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";

function App() {
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
    console.log(expanded);
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
    <>
      <SideBar expanded={expanded} toggle={toggleExpanded} menus={menus} />
    </>
  );
}

export default App;
