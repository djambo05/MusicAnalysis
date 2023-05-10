export const MenuItem = ({
  expand,
  id,
  title,
  img,
  alt,
  subsections,
  handleSubmenu,
  isDropDown,
}) => {
  if (subsections) {
    console.log(id, "yes");
  } else {
    console.log(id, "no");
  }
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
          width: expand ? "228px" : "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            minWidth: "228px",
            pointerEvents: expand ? "" : "none",
          }}
        >
          <img
            style={{
              width: "22px",
              height: "22px",
              marginLeft: "23px",
            }}
            src={`./img/${img}`}
            alt={alt}
          ></img>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: "150px",
            }}
          >
            <span
              style={{
                opacity: expand ? 1 : 0,
                visibility: expand ? "visible" : "hidden",
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
              {title}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "40px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{
                    opacity: expand && subsections ? 1 : 0,
                    visibility: subsections ? "visible" : "hidden",
                    transitionProperty: "opacity, visibility",
                    transitionDelay: "0.2s",
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                  src={`./img/${isDropDown ? "arrowUp.png" : "arrowDown.png"}`}
                  alt="Arrow"
                  onClick={() => handleSubmenu(id)}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
