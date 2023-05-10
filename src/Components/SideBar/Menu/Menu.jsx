import "./index.scss";
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
              padding: "16px 0px",
              minWidth: "228px",
            }}
          >
            <div
              className="hover-background-effect"
              style={{
                padding: "9px 0px",
                height: "40px",
                width: expand ? "70px" : "228px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  minWidth: "228px",
                  pointerEvents: "none",
                }}
              >
                <img
                  style={{
                    width: "22px",
                    height: "22px",
                    marginLeft: "23px",
                  }}
                  src={`./img/${obj.img}`}
                  alt={obj.alt}
                ></img>
                <div style={{ marginLeft: "15px" }}>
                  <span
                    style={{
                      opacity: expand ? 0 : 1,
                      visibility: expand ? "hidden" : "visible",
                      transitionDelay: "0.2s",
                      transitionDuration: "0.4s",
                      transitionProperty: "visibility, opacity",
                      transitionTimingFunction: "ease-in-out",
                      whiteSpace: "nowrap",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    {obj.title}
                  </span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
