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
                cursor: "pointer",
              }}
              onClick={() => handleSubmenu(id)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  opacity: expand && subsections ? 1 : 0,
                  visibility: subsections ? "visible" : "hidden",
                  transitionProperty: "opacity, visibility, transform",
                  transitionDelay: "0.2s",
                  transitionDuration: "0.3s",
                  transitionTimingFunction: "ease-in-out",
                }}
              >
                <img
                  style={{
                    transform: isDropDown ? "rotate(0deg)" : "rotate(180deg)",
                    transitionProperty: "transform",
                    transitionDelay: "0.2s",
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                  src="./img/arrowUp.png"
                  alt="Arrow"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "228px",
          maxHeight: isDropDown
            ? `${(20 * subsections.length).toString()}px`
            : "0px",
          transitionProperty: "max-height",
          transitionDelay: "0.2s",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        {subsections?.map((obj) => {
          return (
            <span
              style={{
                marginLeft: "65px",
                padding: "7.5px 0px",
                opacity: isDropDown ? 1 : 0,
                visibility: subsections ? "visible" : "hidden",
                transitionProperty: "opacity, visibility, min-height",
                transitionDelay: "0.2s",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#CFD4DC",
              }}
            >
              {obj.title}
            </span>
          );
        })}
      </div>
    </li>
  );
};
