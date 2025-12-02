import React, { useState, useEffect } from "react";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (text.length > 0) setTyping(true);

    const timeout = setTimeout(() => setTyping(false), 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Írj üzenetet..."
      >
      </input>
        {typing && <p>Gépel...</p>} 
    </div>
  );
};

export default ChatInput;
