import React, { useState, useEffect } from "react";

const Toast = ({ setSuccess, success }) => {
  useEffect(() => {
    const t = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(t);
  });

  if (!success) return null;
  return (
    <div style={{ background: "green", color: "black", padding: 10}}>
      Művelet sikeres!
    </div>
  );
};

export default Toast;
