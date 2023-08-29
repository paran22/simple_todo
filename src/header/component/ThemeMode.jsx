import React from "react";
import { BsFillBrightnessLowFill, BsFillMoonFill } from "react-icons/bs";
import "./ThemeMode.css";
import { useDarkModeContext } from "../../context/DarkModeContext";

export default function ThemeMode() {
  const { darkMode, changeMode } = useDarkModeContext();
  return (
    <button className="themeMode" onClick={changeMode} style={{color: `${darkMode ? 'var(--text-color)' : 'white'}`}}>
      {darkMode ? <BsFillBrightnessLowFill /> : <BsFillMoonFill />}
    </button>
  );
}
