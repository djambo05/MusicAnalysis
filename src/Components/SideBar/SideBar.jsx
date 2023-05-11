import React, { useContext, useState } from "react";
import { Menu } from "./Menu/Menu";
import { GlobalContext } from "../../Context/globalContext";

const SideBar = () => {
  const { expand, dropSubmenu, handleSubmenu, handleExpand } =
    useContext(GlobalContext);

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#0E284F",
        position: "fixed",
        width: expand ? "228px" : "70px",
        transitionDelay: "0.2s",
        transitionDuration: "0.4s",
        transitionProperty: "width",
        transitionTimingFunction: "ease-in-out",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "80px",
            backgroundColor: "#3051FF",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px 15px",
              minWidth: "228px",
            }}
          >
            <img src="./img/music-icon.png" alt="music-icon"></img>
            <div style={{ marginLeft: "10px" }}>
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
                  fontSize: "20px",
                  lineHeight: "14px",
                }}
              >
                Music Manage
              </span>
            </div>
          </div>
        </div>
        <Menu
          expand={expand}
          handleSubmenu={handleSubmenu}
          dropSubmenu={dropSubmenu}
        />
      </div>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          paddingBottom: "30px",
          paddingInlineStart: "0px",
        }}
      >
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "228px",
            padding: "0px 23px 5px 23px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              onClick={handleExpand}
              style={{
                transform: expand ? "rotateY(0deg)" : "rotateY(180deg)",
                cursor: "pointer",
                transitionDelay: "0.2s",
                transitionDuration: "0.4s",
                transitionProperty: "transform",
                transitionTimingFunction: "ease-in-out",
              }}
              src="./img/arrowLeft.png"
              alt="arrow"
            ></img>
          </div>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "228px",
            padding: "5px 15px 0px 15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <img
              style={{ cursor: "pointer" }}
              src="./img/avatar.png"
              alt="Avatar"
            ></img>
            <div
              style={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  width: expand ? "150px" : "100px",
                  opacity: expand ? 1 : 0,
                  visibility: expand ? "visible" : "hidden",
                  transitionDelay: "0.2s",
                  transitionDuration: "0.4s",
                  transitionProperty: "visibility, opacity, width",
                  transitionTimingFunction: "ease-in-out",
                  whiteSpace: "nowrap",
                  textDecorationLine: "underline",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                Настройки аккаунта
              </span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
