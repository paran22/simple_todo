import React, { useContext } from "react";
import "./Nav.css";
import { NavContext, navItems } from "../../context/Nav";

export default function Nav() {
  const { selectedNavItem, selectNavItem } = useContext(NavContext);
  return (
    <div className="nav">
      <NavItem
        item={navItems.all}
        selected={selectedNavItem === navItems.all}
        select={selectNavItem}
      />
      <NavItem
        item={navItems.active}
        selected={selectedNavItem === navItems.active}
        select={selectNavItem}
      />
      <NavItem
        item={navItems.completed}
        selected={selectedNavItem === navItems.completed}
        select={selectNavItem}
      />
    </div>
  );
}

function NavItem({ item, selected, select }) {
  return (
    <div
      className="navItem"
      style={{
        borderBottom: `${
          selected ? "2px solid var(--point-color)" : "2px solid transparent"
        }`,
      }}
      onClick={() => select(item)}
    >
      {item}
    </div>
  );
}
