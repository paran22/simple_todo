import React, { useState } from "react";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import "./ColorTheme.css";

export default function ColorTheme() {
  const [darkMode, setDarkMode] = useState(false);
  const toggle = () => setDarkMode((prev) => !prev);
  return (
    <div
      className="colorTheme"
      style={{ color: `${darkMode ? "white" : "black"} ` }}
      onClick={toggle}
    >
      <BsFillBrightnessLowFill />
    </div>
  );
}
