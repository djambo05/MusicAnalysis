export const ItemMenu = ({
  id,
  title,
  img,
  alt,
  subsections,
  expanded,
  dropDown,
  isDropDown,
}) => {
  //   console.log(isDropDown);
  return (
    <>
      <li className="menus-li">
        <img
          style={{
            width: "27px",
            height: "27px",
            pointerEvents: "none",
            marginLeft: "21.5px",
          }}
          src={`./img/${img}`}
          alt={`${alt}`}
        ></img>
        <span
          style={{
            opacity: expanded ? 1 : 0,
            visibility: expanded ? "visible" : "hidden",
            transitionProperty: "opacity, visibility",
            transitionDelay: "0.3s",
            transitionDuration: "1s",
            transitionTimingFunction: "ease-in-out",
            minWidth: "120px",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>

        <img
          style={{
            marginLeft: 0,
            backgroundColor: "black",
            opacity: expanded && subsections ? 1 : 0,
            visibility: expanded && subsections ? "visible" : "hidden",
            transitionProperty: "opacity, visibility",
            transitionDelay: "0.2s",
            transitionDuration: "0.3s",
            transitionTimingFunction: "ease-in-out",
          }}
          src={`./img/${
            subsections && expanded && isDropDown ? "up.png" : "down.png"
          }`}
          alt={`${
            subsections && expanded && isDropDown ? "up.png" : "down.png"
          }`}
          onClick={() => dropDown(id)}
        ></img>
      </li>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          gap: "10px",
          maxHeight: isDropDown ? "60px" : "0px",
          height: "auto",
          opacity: isDropDown ? 1 : 0,
          visibility: isDropDown ? "visible" : "hidden",
          transitionProperty: "max-height, opacity, visibility",
          transitionDelay: "0.2s",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        {subsections?.map((item) => {
          return (
            <li
              style={{
                marginLeft: "65px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "17px",
                color: "#CFD4DC",
              }}
              key={item.id}
            >
              {`${item.title}`}
            </li>
          );
        })}
      </ul>
    </>
  );
};
