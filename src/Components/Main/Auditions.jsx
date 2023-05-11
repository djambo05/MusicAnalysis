import { LineChart } from "./Graph";

export const Auditions = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 0px 10px 0px",
        height: "393px",
        // whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          padding: "24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#2D2D2D",
            }}
          >
            Прослушивания
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "79px",
                padding: "25px 0px",
                borderBottom: "1px solid #D9D9D9",
              }}
            >
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#ABABAB",
                    }}
                  >
                    Все прослушивания
                  </span>
                </div>
                <div style={{ display: "flex", padding: "8px 0px 4px 0px" }}>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "40px",
                      lineHeight: "48px",
                      color: "#2D2D2D",
                    }}
                  >
                    4 503 421
                  </span>
                </div>
                <div style={{ display: "flex", paddingTop: "4px", gap: "5px" }}>
                  <span
                    style={{
                      display: "flex",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#3051FF",
                    }}
                  >
                    + 1 456
                  </span>
                  <span
                    style={{
                      display: "flex",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#ABABAB",
                    }}
                  >
                    за последний месяц
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <img src="./img/graphBlue.png" alt="graph"></img>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "79px",
                paddingTop: "25px",
              }}
            >
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#ABABAB",
                    }}
                  >
                    Платные
                  </span>
                </div>
                <div style={{ display: "flex", padding: "8px 0px 4px 0px" }}>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "40px",
                      lineHeight: "48px",
                      color: "#2D2D2D",
                    }}
                  >
                    4 503 421
                  </span>
                </div>
                <div style={{ display: "flex", paddingTop: "4px", gap: "5px" }}>
                  <span
                    style={{
                      display: "flex",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#FE5372",
                    }}
                  >
                    + 1 456
                  </span>
                  <span
                    style={{
                      display: "flex",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "17px",
                      color: "#ABABAB",
                    }}
                  >
                    за последний месяц
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <img src="./img/graphRed.png" alt="graph"></img>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};
