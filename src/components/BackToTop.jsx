import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY);
      //mutassa x pixel alatt
      setVisible(window.scrollY>300)
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }
  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      🔝Fel
    </button>
  );
};

export default BackToTop;
