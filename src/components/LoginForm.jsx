import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email kötelező.";
    } else if (!email.includes("@")) {
      newErrors.email = "Nem érvényes email cím";
    }

    if (!password) {
      newErrors.password = "Jelszó kötelező.";
    } else if (password.length < 6) {
      newErrors.password = "A jelszó legalább 6 karakter legyen";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length == 0);
    return () => {};
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    alert("Form OK!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
          )}
        </div>

        <div>
          <label>Jelszó</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
          )}
        </div>

        <button type="submit" disabled={!isValid} style={{ marginTop: 15 }}>
          Belépés
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
