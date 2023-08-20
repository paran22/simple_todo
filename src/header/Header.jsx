import React from "react";
import ColorTheme from "./component/ColorTheme";
import "./Header.css";
import Nav from "./component/Nav";

export default function Header() {
  return (
    <div className="header">
      <ColorTheme />
      <Nav />
    </div>
  );
}
