import React, { useState, useEffect } from "react";

const Modal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal">
      <div className="content">
        <h2>Modal</h2>
        <button onClick={onClose}>Bezár</button>
      </div>
    </div>
  );
};

export default Modal;
