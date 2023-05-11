import React, { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [dropSubmenu, setDropSubmenu] = useState([]);
  const handleSubmenu = (id) => {
    if (dropSubmenu.includes(id)) {
      setDropSubmenu((prev) => prev.filter((_id) => _id !== id));
    } else {
      setDropSubmenu((prev) => [...prev, id]);
    }
  };
  const handleExpand = (from = "search") => {
    if (from === "search") {
      setExpand(false);
      setDropSubmenu([]);
    } else {
      setExpand(!expand);
      setDropSubmenu([]);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        expand: expand,
        dropSubmenu: dropSubmenu,
        handleSubmenu: handleSubmenu,
        handleExpand: handleExpand,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
