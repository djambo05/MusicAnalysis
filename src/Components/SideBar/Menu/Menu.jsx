export const Menu = ({ expand }) => {
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
  return (
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
        {menuData.map((obj) => {
          return (
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
                <img src={`./img/${obj.img}`} alt={obj.alt}></img>
                <span style={{ whiteSpace: "nowrap" }}>{obj.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
