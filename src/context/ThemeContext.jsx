import { createContext, useState } from "react";
import React from "react";
import { useEffect } from "react";
const ThemeContext = createContext();
function ThemeContextProvider(props) {
  const themes = {
    light: {
      backgroundColor: "bg-light",
      color: "text-dark",
      button: "btn-primary",
      navbar: "navbar-light bg-light ",
    },
    dark: {
      backgroundColor: "bg-dark",
      color: "text-light",
      button: "btn-danger",
      navbar: "navbar-dark bg-dark ",
   },
    
  };
  const [themeName, setThemeName] = useState("light");
  useEffect(() => {
    const localThemeName = localStorage.getItem("themeName")
      ? localStorage.getItem("themeName")
      : localStorage.setItem("themeName", themeName);
    setThemeName(localThemeName);
  }, []);
  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    const theme = themeName === "light" ? themes.light : themes.dark;
    document.body.className = "";
    document.body.classList.add(theme.backgroundColor, theme.color);
  }, [themeName]);
  return (
    <ThemeContext.Provider
      value={{
        theme: themeName === "light" ? themes.light : themes.dark,
        setThemeName: setThemeName,
        themeName: themeName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
