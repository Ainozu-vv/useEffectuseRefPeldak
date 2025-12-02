import React from "react";
import { useState, useEffect } from "react";
const SideBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      style={{
        width: isMobile ? "0px" : "240px",
        overflow: "hidden",
        transition: "0.3s",
      }}
    >
      <p>Menüpont 1</p>
      <p>Menüpont 2</p>
    </aside>
  );
};

export default SideBar;
