import React, { useRef, useState, useEffect } from "react";

const PrevValue = () => {
  const [count, setCount] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(count + 1);
  const diffRef = useRef(null);
  var diffVal = null;
  useEffect(() => {
    prevRef.current = count;
  }, [count]);

  const handleClick = () => {
    diffVal = Number(diffRef.current.value);
    nextRef.current = count + diffVal * 2;
    setCount((c) => c + diffVal);
  };
  return (
    <div>
      <input ref={diffRef} type="number" defaultValue={1} />
      <p>Előző:{prevRef.current}</p>
      <p>Mostani :{count}</p>
      <p>Következő:{nextRef.current}</p>
      <button onClick={() => handleClick()}>+</button>
    </div>
  );
};

export default PrevValue;
