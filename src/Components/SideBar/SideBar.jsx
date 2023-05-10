import { useState } from "react";

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
          height: "80px",
          backgroundColor: "#3051FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: expand ? "70px" : "228px",
          transitionDelay: "0.2s",
          transitionDuration: "0.4s",
          transitionProperty: "width",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <img src="./img/music-icon.png" alt="music-icon"></img>
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
        <ul style={{ width: "100%", listStyle: "none", margin: 0, padding: 0 }}>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "30px",
            }}
          >
            <button style={{ padding: "10px" }} onClick={handleExpand}></button>
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
            <button></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
