import { MenuItem } from "./MenuItem";
import "./index.scss";
export const Menu = ({ expand, handleSubmenu, dropSubmenu }) => {
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
          <MenuItem
            key={obj.id}
            expand={expand}
            {...obj}
            handleSubmenu={handleSubmenu}
            isDropDown={dropSubmenu.includes(obj.id)}
          />
        );
      })}
    </ul>
  );
};
