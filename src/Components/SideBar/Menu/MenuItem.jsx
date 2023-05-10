export const MenuItem = ({ expand, id, title, img, alt, subsections }) => {
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
            justifyContent: "space-between",
            minWidth: "228px",
            pointerEvents: "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                style={{
                  width: "22px",
                  height: "22px",
                  marginLeft: "23px",
                }}
                src={`./img/${img}`}
                alt={alt}
              ></img>
            </div>
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
                marginLeft: "15px",
              }}
            >
              {title}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "40px",
            }}
          >
            <div>
              <img
                src={`./img/${subsections ? "arrowDown.png" : "arrowUp.png"}`}
                alt="Arrow"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
