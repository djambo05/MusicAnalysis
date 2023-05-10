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
    <ul
      style={{
        listStyle: "none",
        height: "auto",
        margin: 0,
        padding: 0,
      }}
    >
      {menuData.map((obj) => {
        return (
          <li
            style={{
              padding: "14px 20px",
              minWidth: "228px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <img
                style={{ width: "27px", height: "27px" }}
                src={`./img/${obj.img}`}
                alt={obj.alt}
              ></img>
              <span style={{ whiteSpace: "nowrap" }}>{obj.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
