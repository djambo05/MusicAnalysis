import { useContext } from "react";
import { GlobalContext } from "../../Context/globalContext";

export const Choose = () => {
  const { choose, handleChoose } = useContext(GlobalContext);
  const chooseData = [
    {
      id: 0,
      title: "Все",
    },
    {
      id: 1,
      title: "iTunes",
    },
    {
      id: 2,
      title: "Apple Music",
    },
    {
      id: 3,
      title: "Spotify",
    },
    {
      id: 4,
      title: "VK Музыка",
    },
    {
      id: 5,
      title: "Яндекс Музыка",
    },
    {
      id: 6,
      title: "Звук",
    },
    {
      id: 7,
      title: "Одноклассники",
    },
    {
      id: 8,
      title: "Deezer",
    },
  ];
  return (
    <div style={{ display: "flex", height: "72px", padding: "12px 0px" }}>
      <div
        style={{
          display: "flex",
          height: "100%",
          borderRadius: "100px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {chooseData.map((obj) => {
          const isChoosen = choose === obj.id ? true : false;
          return (
            <div
              key={obj.id}
              className={isChoosen ? "choosen-effect" : "choose-hover-effect"}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  padding: "12px 0px",
                  borderRadius: "100px",
                  color: isChoosen ? "#FFFFFF" : "#2D2D2D",
                  cursor: "pointer",
                }}
                onClick={() => handleChoose(obj.id)}
              >
                <span
                  style={{
                    padding: "0px 24px",
                    whiteSpace: "nowrap",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "24px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {obj.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ flex: 1, height: "100%" }}></div>
    </div>
  );
};
