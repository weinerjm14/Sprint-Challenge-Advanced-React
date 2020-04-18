import React from "react";

import "./navBar.css";
import { useDarkMode } from "../hooks/useDarkMode";

export default function NavBar() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="nav">
      <h1>Lambda Player Data</h1>
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
}
