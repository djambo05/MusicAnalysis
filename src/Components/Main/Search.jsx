import { useContext } from "react";
import { GlobalContext } from "../../Context/globalContext";
export const Search = () => {
  const { handleExpand } = useContext(GlobalContext);
  return (
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
  );
};
