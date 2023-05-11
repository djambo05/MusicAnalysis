import { useContext } from "react";
import { GlobalContext } from "../../Context/globalContext";
export const Main = () => {
  const { handleExpand } = useContext(GlobalContext);
  return (
    <div
      style={{
        display: "block",
        paddingLeft: "70px",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "block",
          padding: "16px 50px",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "14px",
          }}
        >
          <span
            style={{
              color: "#AEAEAE",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14px",
              width: "42px",
              letterSpacing: "0.05px",
            }}
          >
            Главная
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
            padding: "14px 0 10px",
          }}
        >
          <span
            style={{
              color: "#2D2D2D",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "36px",
            }}
          >
            Аналитика
          </span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                width: "125px",
                color: "#A0A0A0",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "17px",
              }}
            >
              показывать дату за
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0px 32px 0px 16px",
              }}
            >
              <img src="./img/calendar.png" alt="calendar"></img>
              <span
                style={{
                  margin: "0px 5px 0px 8px",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFeatureSettings: "`pnum` on, `lnum` on",
                }}
              >
                последние 30 дней
              </span>
              <img src="./img/arrowBlack.png" alt="arrow"></img>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "125px",
              }}
            >
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "17px",
                  fontFeatureSettings: "`pnum` on, `lnum` on",
                  letterSpacing: "0.285px",
                }}
              >
                26.04.22 - 26.05.22
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "72px",
            padding: "10px 0 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              height: "100%",
              width: "100%",
              padding: "5px 0px 5px 25px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <input
                style={{
                  flex: 1,
                  height: "100%",
                  color: "#A0A0A0",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "17px",
                  border: "none",
                }}
                placeholder="Поиск"
                onClick={() => handleExpand("search")}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "66px",
                cursor: "pointer",
              }}
            >
              <img src="./img/search.png" alt="search"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
