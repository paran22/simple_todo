import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    setDarkMode(prev => !prev);
    updateDarkMode(darkMode);
  };
  useEffect(() => {
    const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, changeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    return;
  }
  document.documentElement.classList.remove('dark');
  localStorage.theme = 'light';
}

export const useDarkMode = () => useContext(DarkModeContext);