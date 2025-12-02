import React, { useRef, useEffect } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, []);

  return (
    <input
      ref={inputRef}
      placeholder="Keresés.."
      style={{ padding: 8, width: 200 }}
    />
  );
};

export default AutoFocusInput;
