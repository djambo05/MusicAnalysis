import { useState } from "react";
import SideBar from "./Components/SideBar";

function App() {
  const menuData = [
    {
      id: 1,
      img: "statistics.png",
      alt: "statistics",
    },
    {
      id: 2,
      img: "headphones.png",
      alt: "headphones",
    },
    {
      id: 3,
      img: "music-list.png",
      alt: "music-list",
    },
    {
      id: 4,
      img: "promotion.png",
      alt: "promotion",
    },
    {
      id: 5,
      img: "newspaper.png",
      alt: "newspaper",
    },
  ];
  const [activeSection, setActiveSection] = useState(menuData);
  const handleSectionClick = (section) => {
    console.log(section);
    setActiveSection(section);
  };
  return (
    <>
      <SideBar sections={menuData} status={handleSectionClick} />
    </>
  );
}

export default App;
