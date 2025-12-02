import React, { useRef, useEffect, useState } from "react";

const MeasureBox = () => {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: 50,
          background: "lightblue",
          marginBottom: 10,
        }}
      />
      <p>Elem szélessége: {width}px</p>
    </div>
  );
};

export default MeasureBox;
