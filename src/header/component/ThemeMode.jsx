import React from "react";
import { BsFillBrightnessLowFill, BsFillMoonFill } from "react-icons/bs";
import "./ThemeMode.css";
import { useDarkMode } from "../../context/DarkMode";

export default function ThemeMode() {
  const { darkMode, changeMode } = useDarkMode();
  return (
    <button className="themeMode" onClick={changeMode} style={{color: `${darkMode ? 'var(--text-color)' : 'white'}`}}>
      {darkMode ? <BsFillBrightnessLowFill /> : <BsFillMoonFill />}
    </button>
  );
}
