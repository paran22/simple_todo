import React from "react";
import ThemeMode from "./component/ThemeMode";
import "./Header.css";
import Nav from "./component/Nav";

export default function Header() {
  return (
    <div className="header">
      <ThemeMode />
      <Nav />
    </div>
  );
}
