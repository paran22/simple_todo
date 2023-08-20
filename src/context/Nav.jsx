import { createContext, useState } from "react";

export const navItems = Object.freeze({
  all: "All",
  active: "Active",
  completed: "Completed",
});

export const NavContext = createContext();

export function NavProvider({ children }) {
  const [selectedNavItem, setSelectedNavItem] = useState(navItems.all);
  const selectNavItem = (navItem) => setSelectedNavItem(navItem);
  return (
    <NavContext.Provider value={{ selectedNavItem, selectNavItem }}>
      {children}
    </NavContext.Provider>
  );
}
